import React from 'react';
import { mount } from 'enzyme';

import RecipeDetails from '../../components/RecipeDetails';

const recipeDetails = {
  recipeTitle: 'Stalker',
  recipeYear: '1979	',
  recipeFormat: 'VHS',
  recipeStars: 'Alexander Kaidanovsky',
};
describe('SearchDetails component', () => {
  test('receive props and renders', () => {
    const wrapper = mount(<RecipeDetails recipeDetails={recipeDetails} />);

    expect(wrapper).toMatchSnapshot();
  });
});
