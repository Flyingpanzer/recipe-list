import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { fetchRecipes } from "../../actions/recipeActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({});

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  });
};

it("calls request action when fetch is called", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, "response"))
    );

  return store.dispatch(fetchRecipes()).then(() => {
    const expectedActions = store.getActions();
    expect(expectedActions).toContainEqual({ type: "FETCH_RECIPES_REQUEST" });
  });
});

it("action returns proper response", () => {
  const expectedData = {
    recipes: [1, 2, 3],
    message: "success",
    success: true
  };
  test("the data is expectedData", () => {
    return fetchRecipes().then(data => {
      expect(data).toBe(expectedData);
    });
  });
});
