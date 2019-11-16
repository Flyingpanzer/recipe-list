import React, { useEffect, useState, Fragment } from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';
import './App.css';

import RecipeEditForm from './RecipeEditForm';
import RecipeDetails from '../containers/RecipesDetails';

const Recipes = ({
  fetchRecipes,
  recipes,
  showEditModal,
  hideEditModal,
  isShowingEditModal,
  editRecipe,
  recipeToEdit,
  displayRecipeById,
  isShowingDeleteModal,
  showDeleteModal,
  hideDeleteModal,
  deleteRecipe,
  recipeToDelete,
  successMsg,
  error,
  isFetching,
}) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  const [editFields, setEditFields] = useState({
    recipeTitle: {
      value: '',
      error: '',
    },
    recipeDesc: {
      value: '',
      error: '',
    },
  });
  const setEditRecipe = recipe => {
    setEditFields({
      ...editFields,
      recipeTitle: {
        value: recipe.recipeTitle,
      },
      recipeDesc: {
        value: recipe.recipeDesc,
      },
    });

    showEditModal(recipe);
  };

  const confirmDeleteRecipe = () => {
    deleteRecipe(recipeToDelete);
  };

  const submitEdit = (e, editFields) => {
    e.preventDefault();
    const { recipeTitle, recipeDesc } = editFields;
    const data = new FormData();
    data.append('id', recipeToEdit._id);
    data.append('recipeTitle', recipeTitle.value.trim());
    data.append('recipeDesc', recipeDesc.value.trim());
    editRecipe(data);
  };

  return (
    <Fragment>
      <div className="container ">
        <div className="row">
          <div className="col-md-5">
            <h3 className="centerAlign">List of recipes:</h3>
            {isFetching && <p>Loading recipes....</p>}
            {recipes && recipes.length <= 0 && !isFetching && (
              <p>Recipe list is empty. Add new recipes</p>
            )}
            {recipes && recipes.length > 0 && !isFetching && (
              <table className="table table-bordered ">
                <thead>
                  <tr>
                    <th>Created</th>
                    <th>Title</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe, i) => (
                    <tr key={i} className="table-row">
                      <td
                        className="col-md-1"
                        onClick={() => displayRecipeById(recipe._id)}
                      >
                        {recipe.createdAt}
                      </td>
                      <td
                        className="col-md-2 td-break-word"
                        onClick={() => displayRecipeById(recipe._id)}
                      >
                        {recipe.recipeTitle}
                      </td>
                      <td className="col-md-1 text-center align-middle">
                        <Button
                          onClick={() => setEditRecipe(recipe)}
                          bsStyle="info"
                          bsSize="xsmall"
                        >
                          <Glyphicon glyph="pencil" />
                        </Button>
                      </td>
                      <td className="col-md-1 text-center align-middle">
                        <Button
                          onClick={() => showDeleteModal(recipe)}
                          bsStyle="info"
                          bsSize="xsmall"
                        >
                          <Glyphicon glyph="trash" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="col-md-7">
            <RecipeDetails />
          </div>
        </div>
      </div>

      <Modal
        show={isShowingEditModal}
        onHide={hideEditModal}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title">
            Edit {recipeToEdit && recipeToEdit.recipeTitle} Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-md-12">
            {recipeToEdit && (
              <RecipeEditForm
                editFields={editFields}
                setEditFields={setEditFields}
                recipeToEdit={recipeToEdit}
                submitEdit={submitEdit}
              />
            )}
            {recipeToEdit && isFetching && (
              <Alert bsStyle="info">
                <strong>Updating...... </strong>
              </Alert>
            )}
            {recipeToEdit && !isFetching && error && (
              <Alert bsStyle="danger">
                <strong>Failed. {error} </strong>
              </Alert>
            )}
            {recipeToEdit && !isFetching && successMsg && (
              <Alert bsStyle="success">
                <strong> {recipeToEdit.recipeTitle} </strong>
                {successMsg}
              </Alert>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideEditModal}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={isShowingDeleteModal} onHide={hideDeleteModal}>
        <Modal.Header>
          <Modal.Title>Delete recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {recipeToDelete && !error && !isFetching && (
            <Alert bsStyle="warning">
              Are you sure you want to delete this recipe{' '}
              <strong>{recipeToDelete.recipeTitle}</strong> ?
            </Alert>
          )}
          {recipeToDelete && error && (
            <Alert bsStyle="warning">
              Failed. <strong>{error} </strong>
            </Alert>
          )}

          {recipeToDelete && !error && isFetching && (
            <Alert bsStyle="success">
              <strong>Deleting.... </strong>
            </Alert>
          )}

          {!recipeToDelete && !error && !isFetching && (
            <Alert bsStyle="success">
              Recipe <strong>{successMsg} </strong>
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!successMsg && !isFetching && (
            <div>
              <Button onClick={confirmDeleteRecipe}>Yes</Button>
              <Button onClick={hideDeleteModal}>No</Button>
            </div>
          )}
          {successMsg && !isFetching && (
            <Button onClick={hideDeleteModal}>Close</Button>
          )}
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Recipes;
