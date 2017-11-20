const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const validationSchema = new Schema({
  title: String,
  description: String,
  creator:{type: Schema.Types.ObjectId, ref:'User', required:true},
  project:{type: Schema.Types.ObjectId, ref:'Project', required:true},
  validations:[],
  priceMax:Number,
  priceMin:Number,
);

const Validation = mongoose.model('Validation', validationSchema);
module.exports = Validation;
