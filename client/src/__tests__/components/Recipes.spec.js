import React from 'react';
import { mount, shallow } from 'enzyme';
import expectExport from 'expect';

import Recipes from '../../components/Recipes';
import RecipeDetails from '../../containers/RecipesDetails';

describe('RecipeForm component', () => {
  test('should render RecipeDetails component', () => {
    const wrapper = shallow(<Recipes />);
    expectExport(wrapper.find(RecipeDetails).length).toEqual(1);
  });
});
