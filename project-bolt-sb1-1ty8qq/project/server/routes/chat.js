import express from 'express';
import Chat from '../models/Chat.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Get chat history
router.get('/:chatId', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId)
      .populate('participants', 'name email')
      .populate('messages.sender', 'name email');
    
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    // Verify user is a participant
    if (!chat.participants.some(p => p._id.toString() === req.user.userId)) {
      return res.status(403).json({ message: 'Not authorized to access this chat' });
    }

    res.json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chat', error: error.message });
  }
});

// Create new chat
router.post('/', authenticateToken, async (req, res) => {
  try {
    const chat = new Chat({
      ...req.body,
      participants: [...req.body.participants, req.user.userId]
    });
    
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chat', error: error.message });
  }
});

// Send message
router.post('/:chatId/messages', authenticateToken, async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.chatId);
    if (!chat) {
      return res.status(404).json({ message: 'Chat not found' });
    }

    // Verify user is a participant
    if (!chat.participants.includes(req.user.userId)) {
      return res.status(403).json({ message: 'Not authorized to send messages in this chat' });
    }

    chat.messages.push({
      sender: req.user.userId,
      content: req.body.content,
      type: req.body.type || 'text',
      fileUrl: req.body.fileUrl
    });

    await chat.save();
    res.status(201).json(chat.messages[chat.messages.length - 1]);
  } catch (error) {
    res.status(500).json({ message: 'Error sending message', error: error.message });
  }
});

export default router;