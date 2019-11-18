import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  SHOW_ADD_MODAL,
  HIDE_ADD_MODAL,
  ADD_NEW_RECIPE_SUCCESS,
  ADD_NEW_RECIPE_FAILED,
  DISPLAY_RECIPE_BY_ID,
  SHOW_PREV_DESC_SUCCESS,
  SHOW_PREV_DESC_FAILED,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  EDIT_RECIPE_REQUEST,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILED,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILED,
} from '../actions/actionType';

export const INITIAL_STATE = {
  recipes: [],
  recipe: null,
  isFetching: false,
  error: null,
  errorAdd: null,
  success: null,
  successMsg: null,
  successAddMsg: null,
  prevDesc: [],
  isShowingDeleteModal: false,
  isShowingEditModal: false,
  recipeToDelete: null,
  recipeToEdit: null,
};

export const recipeReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...currentState,
        recipes: [],
        isFetching: true,
        prevDesc: [],
      };

    case FETCH_RECIPES_SUCCESS:
      action.recipes.map(
        recipe =>
          (recipe.createdAt = new Date(recipe.createdAt)
            .toISOString()
            .replace(/T|Z|\.\d{3}/g, ' ')
            .trim()),
      );
      return {
        ...currentState,
        recipes: action.recipes,
        recipe: null,
        isFetching: false,
        successMsg: action.message,
      };

    case FETCH_RECIPES_FAILED:
      return {
        ...currentState,
        recipes: [],
        isFetching: false,
        error: action.error,
      };

    case ADD_NEW_RECIPE_SUCCESS:
      const nextState = {
        ...currentState,
        recipes: [...currentState.recipes, action.recipe],
        isFetching: false,
        success: action.success,
        successAddMsg: action.message,
      };
      return nextState;

    case ADD_NEW_RECIPE_FAILED:
      return {
        ...currentState,
        recipes: currentState.recipes,
        isFetching: true,
        error: action.error,
      };

    case SHOW_ADD_MODAL:
      return {
        ...currentState,
        isShowingAddModal: true,
      };

    case HIDE_ADD_MODAL:
      return {
        ...currentState,
        isShowingAddModal: false,
      };

    case EDIT_RECIPE_REQUEST:
      return {
        ...currentState,
        isFetching: true,
      };

    case EDIT_RECIPE_SUCCESS:
      const editedRecipe = currentState.recipes.map(recipe => {
        if (recipe._id !== action.recipeToEdit._id) {
          return recipe;
        }
        return { ...recipe, ...action.recipeToEdit };
      });
      return {
        ...currentState,
        recipes: editedRecipe,
        isFetching: false,
        successMsg: action.message,
      };
    case EDIT_RECIPE_FAILED:
      return {
        ...currentState,
        isFetching: true,
        error: action.error,
        recipeToEdit: null,
      };

    case SHOW_EDIT_MODAL:
      return {
        ...currentState,
        isShowingEditModal: true,
        recipeToEdit: action.recipeToEdit,
        successMsg: null,
        recipe: null,
        prevDesc: [],
      };

    case HIDE_EDIT_MODAL:
      return {
        ...currentState,
        isShowingEditModal: false,
        recipeToEdit: null,
      };

    case DISPLAY_RECIPE_BY_ID:
      const recipeDetails = currentState.recipes.find(
        recipe => recipe._id === action.recipeId,
      );
      return {
        ...currentState,
        recipe: recipeDetails,
        prevDesc: [],
      };

    case SHOW_PREV_DESC_SUCCESS:
      return {
        ...currentState,
        prevDesc: action.prevDesc,
        successMsg: action.message,
      };

    case SHOW_PREV_DESC_FAILED:
      return {
        ...currentState,
        prevDesc: [],
        error: action.error,
      };

    case DELETE_RECIPE_SUCCESS:
      const filteredRecipes = currentState.recipes.filter(
        recipe => recipe._id !== currentState.recipeToDelete._id,
      );
      return {
        ...currentState,
        recipes: filteredRecipes,
        successMsg: action.message,
        recipeToDelete: action.recipeToDelete,
        isFetching: false,
      };

    case DELETE_RECIPE_FAILED:
      return {
        ...currentState,
        recipes: currentState.recipes,
        error: action.error,
      };

    case SHOW_DELETE_MODAL:
      return {
        ...currentState,
        successMsg: null,
        isShowingDeleteModal: true,
        recipe: null,
        recipeToDelete: action.recipe,
        prevDesc: [],
      };

    case HIDE_DELETE_MODAL:
      return {
        ...currentState,
        isShowingDeleteModal: false,
        recipeToDelete: null,
      };

    default:
      return currentState;
  }
};
