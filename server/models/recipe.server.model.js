import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  recipeTitle: String,
  recipeDesc: [String],
});

export default mongoose.model('Recipe', Schema);
