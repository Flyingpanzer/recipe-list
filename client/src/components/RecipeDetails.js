import React, { Fragment } from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <Fragment>
      {recipe && (
        <Fragment>
          <h3>Recipe Details</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Description</th>
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
    </Fragment>
  );
};

export default RecipeDetails;
