import express from 'express';
import Stripe from 'stripe';
import { authenticateToken } from '../middleware/auth.js';
import Project from '../models/Project.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

router.post('/create-payment-intent', authenticateToken, async (req, res) => {
  try {
    const { projectId } = req.body;
    
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: project.budget * 100, // Convert to cents
      currency: 'usd',
      metadata: {
        projectId: project._id.toString(),
        clientId: req.user.userId
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment intent', error: error.message });
  }
});

router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    if (event.type === 'payment_intent.succeeded') {
      const { projectId } = event.data.object.metadata;
      
      await Project.findByIdAndUpdate(projectId, {
        paymentStatus: 'completed'
      });
    }

    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ message: 'Webhook error', error: error.message });
  }
});

export default router;