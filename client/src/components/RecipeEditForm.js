import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const RecipeEditForm = ({
  editFields,
  setEditFields,
  recipeToEdit,
  submitEdit,
}) => {
  const onChange = e => {
    e.preventDefault();

    const {
      target: { name, value },
    } = e;

    setEditFields({
      ...editFields,
      [name]: {
        value,
      },
    });
    console.log(editFields);
  };
  return (
    <form
      className="form form-horizontal"
      id="FilmEditForm"
      onSubmit={e => submitEdit(e, editFields)}
    >
      <div className="row">
        <div className="col-md-12">
          <FormGroup>
            <ControlLabel>Description: </ControlLabel>
            <FormControl
              onChange={onChange}
              componentClass="textarea"
              placeholder="Enter description"
              name="recipeDesc"
              defaultValue={recipeToEdit.recipeDesc}
            />
          </FormGroup>
        </div>
      </div>
      <FormGroup>
        <Button type="submit" bsStyle="success" bsSize="large" block>
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};

export default RecipeEditForm;
