import { connect } from 'react-redux';

import RecipeDetails from '../components/RecipeDetails';

const mapStateToProps = ({ recipeState }) => {
  return {
    recipe: recipeState.recipe,
  };
};

export default connect(mapStateToProps, null)(RecipeDetails);
