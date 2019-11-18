import { INITIAL_STATE, recipeReducer } from '../../reducers/recipeReducer';

describe('recipeReducer', () => {
  it('SHOW_EDIT_MODAL', () => {
    const action = {
      type: 'SHOW_EDIT_MODAL',
      recipeToEdit: undefined,
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      isShowingEditModal: true,
      recipeToEdit: undefined,
    });
  });

  it('ADD_NEW_RECIPE_FAILED', () => {
    const action = {
      type: 'ADD_NEW_RECIPE_FAILED',
      error: true,
      isFetching: true,
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      error: action.error,
      isFetching: true,
    });
  });

  it('FETCH_RECIPES_SUCCESS', () => {
    const action = {
      type: 'FETCH_RECIPES_SUCCESS',
      recipes: [{ key: 'obj' }],
      message: undefined,
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      recipes: action.recipes,
      successMsg: action.message,
    });
  });
});
