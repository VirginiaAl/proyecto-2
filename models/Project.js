const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const projectSchema = new Schema({
  title: String,
  description: String,
  category:{ type: String, enum: TYPES, required: true },
  creator:{type: Schema.Types.ObjectId, ref:'User', required:true},
  developer:{type: Schema.Types.ObjectId, ref:'User', required:true},
  deadLine: {type: Date, required:true},
  validations:[{type: Schema.Types.ObjectId, ref:'Validation'}]
  reviews:{type: Schema.Types.ObjectId, ref:'Review', required:true},
  {
    timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
