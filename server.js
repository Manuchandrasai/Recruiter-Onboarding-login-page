const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ← after express, before use
const authRoutes = require('./routes/auth');

const app = express(); // ✅ THIS must come BEFORE any app.use()

// Middleware
app.use(cors()); // ✅ NOW safe to use
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/recruiter_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
});
