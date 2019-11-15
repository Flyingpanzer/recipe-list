import { connect } from 'react-redux';

import Recipes from '../components/Recipes';
import {
  fetchRecipes,
  displayRecipeById,
  showDeleteModal,
  deleteRecipe,
  hideDeleteModal,
  showEditModal,
  hideEditModal,
  editRecipe,
} from '../actions/recipeActions';

const mapStateToProps = ({ recipeState }) => ({
  isShowingEditModal: recipeState.isShowingEditModal,
  isShowingDeleteModal: recipeState.isShowingDeleteModal,
  isFetching: recipeState.isFetching,
  recipes: recipeState.recipes,
  error: recipeState.error,
  successMsg: recipeState.successMsg,
  recipeToDelete: recipeState.recipeToDelete,
  recipeToEdit: recipeState.recipeToEdit,
});

export default connect(mapStateToProps, {
  fetchRecipes,
  hideDeleteModal,
  hideEditModal,
  displayRecipeById: recipeId => displayRecipeById(recipeId),
  deleteRecipe: recipeToDelete => deleteRecipe(recipeToDelete),
  showEditModal: recipeToEdit => showEditModal(recipeToEdit),
  showDeleteModal: recipeToDelete => showDeleteModal(recipeToDelete),
  editRecipe: recipeToEdit => editRecipe(recipeToEdit),
})(Recipes);
