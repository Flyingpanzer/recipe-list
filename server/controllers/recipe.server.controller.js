import mongoose from 'mongoose';

import Recipe from '../models/recipe.server.model';

export const getRecipes = (req, res) => {
  Recipe.find().exec((err, recipes) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }

    return res.json({
      success: true,
      message: 'Recipes fetched successfully',
      recipes,
    });
  });
};

export const addRecipe = (req, res) => {
  const newRecipe = new Recipe(req.body);

  Recipe.find({ recipeTitle: req.body.recipeTitle }, (err, recipe) => {
    if (!err && recipe.length > 0) {
      return res.json({
        success: false,
        message: 'The recipe with this title already exists',
      });
    } else {
      newRecipe.save((err, recipe) => {
        if (err) {
          return res.json({ success: false, message: 'Some Error' });
        }

        return res.json({
          success: true,
          message: 'Recipe added successfully',
          recipe,
        });
      });
    }
  });
};

export const updateRecipe = (req, res) => {
  Recipe.findOneAndUpdate(
    { _id: req.body.id },
    req.body,
    { new: true },
    (err, recipe) => {
      if (err) {
        return res.json({ success: false, message: 'Some Error', error: err });
      }
      return res.json({
        success: true,
        message: 'Updated successfully',
        recipe,
      });
    },
  );
};

export const deleteRecipe = (req, res) => {
  Recipe.findByIdAndRemove(req.params.id, (err, recipe) => {
    if (err) {
      return res.json({ success: false, message: 'Some Error' });
    }

    return res.json({
      success: true,
      message: recipe.recipeTitle + ' deleted successfully',
    });
  });
};
