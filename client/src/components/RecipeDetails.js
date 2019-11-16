import React, { Fragment } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import PrevRecipes from './PrevRecipes';
const RecipeDetails = ({ recipe, showPreviousDesc, prevDesc }) => {
  return (
    <Fragment>
      {recipe && (
        <Fragment>
          <h3>Recipe Details</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>
                  Description{' '}
                  <Button
                    onClick={() => showPreviousDesc(recipe)}
                    bsStyle="info"
                    bsSize="xsmall"
                  >
                    <Glyphicon glyph="th-list" />
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{recipe.recipeDesc}</td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      )}
      <PrevRecipes prevDesc={prevDesc} />
    </Fragment>
  );
};

export default RecipeDetails;
