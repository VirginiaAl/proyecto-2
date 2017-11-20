const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
  name: String,
  description: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: [
      'entrepeneur',
      'developer',
      'proficient'
    ],
    default: 'developer'
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User
