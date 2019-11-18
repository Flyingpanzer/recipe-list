import React from 'react';
import { mount } from 'enzyme';

import RecipeDetails from '../../components/RecipeDetails';
import PrevRecipes from '../../components/PrevRecipes';

const recipeDetails = {
  recipe: {
    recipeTitle: 'Omelette',
    recipeDesc: 'Desc',
  },
  showPreviousDesc: false,
  prevDesc: [' eggs, flour, and salt'],
};
describe('RecipeDetails component', () => {
  test('receive props and renders', () => {
    const wrapper = mount(<RecipeDetails recipeDetails={recipeDetails} />);

    expect(wrapper).toMatchSnapshot();
  });
});
