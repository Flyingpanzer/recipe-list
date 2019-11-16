import express from 'express';

import {
  getRecipes,
  addRecipe,
  deleteRecipe,
  updateRecipe,
  showPrevDesc,
} from '../controllers/recipe.server.controller';

const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .put(updateRecipe)
  .post(addRecipe);
router
  .route('/:id')
  .delete(deleteRecipe)
  .post(showPrevDesc);

export default router;
