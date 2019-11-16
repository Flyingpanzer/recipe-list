import { connect } from 'react-redux';

import { showPreviousDesc } from '../actions/recipeActions';
import RecipeDetails from '../components/RecipeDetails';

const mapStateToProps = ({ recipeState }) => {
  return {
    recipe: recipeState.recipe,
    prevDesc: recipeState.prevDesc,
  };
};

export default connect(mapStateToProps, {
  showPreviousDesc: recipe => showPreviousDesc(recipe),
})(RecipeDetails);
