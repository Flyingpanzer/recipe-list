import { connect } from 'react-redux';

import AddRecipe from '../components/AddRecipe';
import {
  addNewRecipe,
  showAddModal,
  hideAddModal,
} from '../actions/recipeActions';

const mapStateToProps = ({ recipeState }) => ({
  errorAdd: recipeState.errorAdd,
  success: recipeState.success,
  successAddMsg: recipeState.successAddMsg,
  isShowingAddModal: recipeState.isShowingAddModal,
});

export default connect(mapStateToProps, {
  addNewRecipe: recipe => addNewRecipe(recipe),
  showAddModal,
  hideAddModal,
})(AddRecipe);
