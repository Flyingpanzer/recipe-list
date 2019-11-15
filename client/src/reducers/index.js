import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { recipeReducer } from './recipeReducer';

export default combineReducers({
  recipeState: recipeReducer,
  routing,
});
