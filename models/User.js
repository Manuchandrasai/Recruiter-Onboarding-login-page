const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'super_recruiter' },
  company_id: { type: mongoose.Schema.Types.ObjectId, default: null },
});

module.exports = mongoose.model('User', userSchema);
