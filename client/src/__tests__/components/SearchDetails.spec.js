import React from "react";
import { shallow } from "enzyme";

import SearchDetails from "../../components/SearchDetails";

const searchedRecipes = {
  recipeTitle: "Leon",
  recipeYear: "1994",
  recipeFormat: "VHS",
  recipeStars: "Luc Besson"
};
describe("SearchDetails component", () => {
  test("receive props and renders", () => {
    const wrapper = shallow(<SearchDetails searchedRecipes={searchedRecipes} />);

    expect(wrapper).toMatchSnapshot();
  });
});
