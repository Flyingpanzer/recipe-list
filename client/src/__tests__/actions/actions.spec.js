import {
  addNewRecipeRequestFailed,
  displayRecipeById,
  searchRecipeRequestSuccess
} from "../../actions/recipeActions";

it("addNewRecipeRequestFailed(): should create an action to set error", () => {
  const expectedAction = {
    type: "ADD_NEW_RECIPE_REQUEST_FAILED",
    error: undefined
  };
  expect(addNewRecipeRequestFailed()).toEqual(expectedAction);
});

it("displayRecipeById(): should create an action to set recipe id", () => {
  const expectedAction = {
    type: "DISPLAY_RECIPE_BY_ID",
    recipeId: undefined
  };
  expect(displayRecipeById()).toEqual(expectedAction);
});

it("searchRecipeRequestSuccess(): should create an action to set recipe and success message", () => {
  const expectedAction = {
    type: "SEARCH_RECIPE_REQUEST_SUCCESS",
    recipe: undefined,
    message: undefined
  };
  expect(searchRecipeRequestSuccess()).toEqual(expectedAction);
});
