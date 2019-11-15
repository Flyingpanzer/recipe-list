import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILED,
  SHOW_ADD_MODAL,
  HIDE_ADD_MODAL,
  ADD_NEW_RECIPE_REQUEST,
  ADD_NEW_RECIPE_SUCCESS,
  ADD_NEW_RECIPE_FAILED,
  SHOW_EDIT_MODAL,
  HIDE_EDIT_MODAL,
  EDIT_RECIPE_REQUEST,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_FAILED,
  DISPLAY_RECIPE_BY_ID,
  SHOW_DELETE_MODAL,
  HIDE_DELETE_MODAL,
  DELETE_RECIPE_REQUEST,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_FAILED,
} from './actionType';

const apiUrl = '/api/';

export const fetchRecipes = () => {
  return dispatch => {
    dispatch(fetchRecipesRequest());
    return fetch(apiUrl).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(fetchRecipesSuccess(data.recipes, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(fetchRecipesFailed(error));
        });
      }
    });
  };
};

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST,
  };
};

export const fetchRecipesSuccess = (recipes, message) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    recipes: recipes,
    message,
  };
};

export const fetchRecipesFailed = error => {
  return {
    type: FETCH_RECIPES_FAILED,
    error,
  };
};

export const addNewRecipe = recipe => {
  return dispatch => {
    dispatch(addNewRecipeRequest(recipe));
    return fetch(apiUrl, {
      method: 'post',
      body: recipe,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(addNewRecipeSuccess(data.recipe, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addNewRecipeFailed(error));
        });
      }
    });
  };
};

export const addNewRecipeRequest = recipe => {
  return {
    type: ADD_NEW_RECIPE_REQUEST,
    recipe,
  };
};

export const addNewRecipeSuccess = (success, message, recipe = []) => {
  return {
    type: ADD_NEW_RECIPE_SUCCESS,
    success,
    message,
    recipe,
  };
};

export const addNewRecipeFailed = error => {
  return {
    type: ADD_NEW_RECIPE_FAILED,
    error,
  };
};

export const showAddModal = () => {
  return {
    type: SHOW_ADD_MODAL,
  };
};

export const hideAddModal = () => {
  return {
    type: HIDE_ADD_MODAL,
  };
};

export const displayRecipeById = recipeId => {
  return {
    type: DISPLAY_RECIPE_BY_ID,
    recipeId,
  };
};

export const showEditModal = recipeToEdit => {
  return {
    type: SHOW_EDIT_MODAL,
    recipeToEdit,
  };
};

export const hideEditModal = () => {
  return {
    type: HIDE_EDIT_MODAL,
  };
};

export const editRecipe = recipeToEdit => {
  return dispatch => {
    dispatch(editRequest());
    return fetch(apiUrl, {
      method: 'put',
      body: recipeToEdit,
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(editSuccess(data.recipe, data.message));
          console.log(data);
        });
      } else {
        response.json().then(error => {
          dispatch(editFailed(error));
        });
      }
    });
  };
};

export const editRequest = () => {
  return {
    type: EDIT_RECIPE_REQUEST,
  };
};

export const editSuccess = (recipeToEdit, message) => {
  return {
    type: EDIT_RECIPE_SUCCESS,
    recipeToEdit,
    message,
  };
};

export const editFailed = error => {
  return {
    type: EDIT_RECIPE_FAILED,
    error,
  };
};

export const showDeleteModal = recipe => {
  return {
    type: SHOW_DELETE_MODAL,
    recipe,
  };
};

export const hideDeleteModal = () => {
  return {
    type: HIDE_DELETE_MODAL,
  };
};

export const deleteRecipe = recipeToDelete => {
  return dispatch => {
    dispatch(deleteRecipeRequest(recipeToDelete));
    return fetch(apiUrl + recipeToDelete._id, {
      method: 'delete',
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(deleteRecipeSuccess(data.recipe, data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(deleteRecipeFailed(error));
        });
      }
    });
  };
};

export const deleteRecipeRequest = recipeToDelete => {
  return {
    type: DELETE_RECIPE_REQUEST,
    recipeToDelete,
  };
};

export const deleteRecipeSuccess = (recipeToDelete, message) => {
  return {
    type: DELETE_RECIPE_SUCCESS,
    recipeToDelete: recipeToDelete,
    message,
  };
};

export const deleteRecipeFailed = error => {
  return {
    type: DELETE_RECIPE_FAILED,
    error,
  };
};
