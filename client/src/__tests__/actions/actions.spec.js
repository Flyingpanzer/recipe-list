import {
  addNewRecipeFailed,
  displayRecipeById,
  showPrevDescSuccess,
} from '../../actions/recipeActions';

it('addNewRecipeFailed(): should create an action to set error', () => {
  const expectedAction = {
    type: 'ADD_NEW_RECIPE_FAILED',
    error: undefined,
  };
  expect(addNewRecipeFailed()).toEqual(expectedAction);
});

it('displayRecipeById(): should create an action to set recipe id', () => {
  const expectedAction = {
    type: 'DISPLAY_RECIPE_BY_ID',
    recipeId: undefined,
  };
  expect(displayRecipeById()).toEqual(expectedAction);
});

it('showPrevDescSuccess(): should create an action to set recipe and success message', () => {
  const expectedAction = {
    type: 'SHOW_PREV_DESC_SUCCESS',
    prevDesc: undefined,
    message: undefined,
  };
  expect(showPrevDescSuccess()).toEqual(expectedAction);
});
