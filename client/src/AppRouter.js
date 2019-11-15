import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Recipes from './containers/Recipes';
import AddRecipe from './containers/AddRecipe';

const AppRouter = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/addRecipe" component={AddRecipe} />
        <Route path="/" component={Recipes} />
      </Switch>
    </div>
  );
};

export default AppRouter;
