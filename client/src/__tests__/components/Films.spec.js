import React from "react";
import { mount, shallow } from "enzyme";
import expectExport from "expect";

import Recipes from "../../components/Recipes";
import ToolBar from "../../containers/ToolBar";
import RecipeDetails from "../../containers/RecipeDetails";

describe("RecipeForm component", () => {
  test("should render ToolBar component", () => {
    const wrapper = shallow(<Recipes />);
    expectExport(wrapper.find(ToolBar).length).toEqual(1);
  });

  test("should render RecipeDetails component", () => {
    const wrapper = shallow(<Recipes />);
    expectExport(wrapper.find(RecipeDetails).length).toEqual(1);
  });
});
