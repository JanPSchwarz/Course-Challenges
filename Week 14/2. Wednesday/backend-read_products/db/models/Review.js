import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewScheme = new Schema({
  title: { type: String, required: true },
  text: { type: String },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewScheme);

export default Review;
