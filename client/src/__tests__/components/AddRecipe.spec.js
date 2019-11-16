import React from "react";
import AddRecipe from "../../components/AddRecipe";
import { shallow } from "enzyme";
import RecipeForm from "../../components/RecipeForm";
import expectExport from "expect";

describe("AddFillm component", () => {
  test("should render Recipe component", () => {
    const wrapper = shallow(<AddRecipe />);
    expectExport(wrapper.children(RecipeForm).length).toEqual(1);
  });
});
