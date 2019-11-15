import express from 'express';

import {
  getRecipes,
  addRecipe,
  deleteRecipe,
  updateRecipe,
} from '../controllers/recipe.server.controller';

const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .put(updateRecipe)
  .post(addRecipe);
router.route('/:id').delete(deleteRecipe);

export default router;
