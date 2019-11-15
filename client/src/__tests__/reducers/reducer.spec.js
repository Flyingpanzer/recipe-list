import { INITIAL_STATE, recipeReducer } from "../../reducers/recipeReducer";

describe("recipeReducer", () => {
  it("SHOW_UPLOAD_MODAL", () => {
    const action = {
      type: "SHOW_UPLOAD_MODAL"
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      isShowingUploadModal: true
    });
  });

  it("SEARCH_RECIPE_REQUEST_FAILED", () => {
    const action = {
      type: "SEARCH_RECIPE_REQUEST_FAILED",
      error: true,
      isFetching: true
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      error: action.error,
      isFetching: true
    });
  });

  it("FETCH_RECIPES_SUCCESS", () => {
    const action = {
      type: "FETCH_RECIPES_SUCCESS",
      recipes: [{ key: "obj" }],
      message: undefined
    };

    expect(recipeReducer(INITIAL_STATE, action)).toEqual({
      ...INITIAL_STATE,
      recipes: action.recipes,
      successMsg: action.message
    });
  });
});
