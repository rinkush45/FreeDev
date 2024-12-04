import express from 'express';
import Project from '../models/Project.js';
import { authenticateToken, authorizeRole } from '../middleware/auth.js';

const router = express.Router();

// Get all projects (admin only)
router.get('/', authenticateToken, authorizeRole(['admin']), async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('client', 'name email')
      .populate('team', 'name email');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
});

// Get user's projects
router.get('/my-projects', authenticateToken, async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [
        { client: req.user.userId },
        { team: req.user.userId }
      ]
    })
    .populate('client', 'name email')
    .populate('team', 'name email');
    
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error: error.message });
  }
});

// Create new project
router.post('/', authenticateToken, async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      client: req.user.userId
    });
    
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project', error: error.message });
  }
});

// Update project
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        $or: [
          { client: req.user.userId },
          { team: req.user.userId }
        ]
      },
      req.body,
      { new: true }
    );
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project', error: error.message });
  }
});

// Delete project (admin only)
router.delete('/:id', authenticateToken, authorizeRole(['admin']), async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error: error.message });
  }
});

export default router;