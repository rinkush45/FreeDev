import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  team: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'review', 'completed'],
    default: 'pending'
  },
  budget: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'partial', 'completed'],
    default: 'pending'
  },
  timeline: {
    startDate: Date,
    endDate: Date,
    milestones: [{
      title: String,
      description: String,
      dueDate: Date,
      completed: Boolean
    }]
  },
  files: [{
    name: String,
    url: String,
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    uploadedAt: Date
  }]
}, {
  timestamps: true
});

export default mongoose.model('Project', projectSchema);