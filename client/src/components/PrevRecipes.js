import React, { Fragment } from 'react';

const PrevRecipes = ({ prevDesc }) => {
  return (
    <div>
      {prevDesc.length > 0 && (
        <Fragment>
          <h3>Previous versions</h3>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {prevDesc.map((desc, i) => {
                return (
                  <tr key={i}>
                    <td>{desc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  );
};
export default PrevRecipes;
