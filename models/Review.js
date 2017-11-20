const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const reviewSchema = new Schema({
  title: String,
  description: String,
  reviewer:{type: Schema.Types.ObjectId, ref:'User', required:true},
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
