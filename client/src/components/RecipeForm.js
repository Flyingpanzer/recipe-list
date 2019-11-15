import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Alert,
  Modal,
  Button,
} from 'react-bootstrap';

const RecipeForm = ({
  addRecipe,
  inputFields,
  setInputFields,
  isShowingAddModal,
  hideAddModal,
  success,
  successAddMsg,
}) => {
  const onChange = e => {
    e.preventDefault();

    const {
      target: { name, value },
    } = e;

    setInputFields({
      ...inputFields,
      [name]: {
        value,
      },
    });
  };

  return (
    <div className="container">
      <form
        className="form form-horizontal"
        onSubmit={e => addRecipe(e, inputFields)}
      >
        <div className="row">
          <h3 className="centerAlign">Add a recipe film</h3>
          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Title: </ControlLabel>
              <FormControl
                value={inputFields.recipeTitle.value}
                onChange={onChange}
                type="text"
                placeholder="Enter recipe title"
                name="recipeTitle"
              />
              {inputFields.recipeTitle.error && (
                <div className="text-danger">
                  {inputFields.recipeTitle.error}
                </div>
              )}
            </FormGroup>
          </div>

          <div className="col-md-12">
            <FormGroup>
              <ControlLabel>Description: </ControlLabel>
              <FormControl
                value={inputFields.recipeDesc.value}
                onChange={onChange}
                componentClass="textarea"
                placeholder="Enter description"
                name="recipeDesc"
              />
              {inputFields.recipeDesc.error && (
                <div className="text-danger">
                  {inputFields.recipeDesc.error}
                </div>
              )}
            </FormGroup>
          </div>
        </div>
        <FormGroup>
          <Button type="submit" bsStyle="success" bsSize="large" block>
            Submit
          </Button>
        </FormGroup>

        <Modal show={isShowingAddModal} onHide={hideAddModal}>
          <Modal.Header>
            <Modal.Title>Recipe added</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!success && (
              <Alert bsStyle="warning">
                Failed. <strong>{successAddMsg} </strong>
              </Alert>
            )}
            {success && (
              <Alert bsStyle="success">
                <strong>{successAddMsg} </strong>
              </Alert>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hideAddModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default RecipeForm;
