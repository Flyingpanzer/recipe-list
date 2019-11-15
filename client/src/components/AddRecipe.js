import React, { useState } from 'react';

import './App.css';
import RecipeForm from './RecipeForm';

const AddRecipe = ({
  addNewRecipe,
  showAddModal,
  hideAddModal,
  isShowingAddModal,
  errorAdd,
  success,
  successAddMsg,
}) => {
  const [inputFields, setInputFields] = useState({
    recipeTitle: {
      value: '',
      error: '',
    },
    recipeDesc: {
      value: '',
      error: '',
    },
  });

  const validateInput = () => {
    const { recipeTitle, recipeDesc } = inputFields;

    const errors = {};

    if (recipeTitle.value === '' || recipeTitle.value.trim() === '') {
      errors.recipeTitle = 'Please, enter a recipe title';
    }

    if (recipeDesc.value === '') {
      errors.recipeDesc = 'Please, enter the recipe description';
    }

    if (Object.keys(errors).length > 0) {
      const newInputs = Object.assign({}, inputFields);

      for (let inputField in errors) {
        newInputs[inputField].error = errors[inputField];
      }

      setInputFields(newInputs);

      return false;
    }
    return true;
  };

  const resetInputFields = () => {
    setInputFields({
      ...inputFields,
      recipeTitle: {
        value: '',
        error: '',
      },
      recipeDesc: {
        value: '',
        error: '',
      },
    });
  };

  const addRecipe = (e, inputFields) => {
    e.preventDefault();

    const isInputValid = validateInput(inputFields);

    if (isInputValid) {
      const { recipeTitle, recipeDesc } = inputFields;
      const data = new FormData();
      data.append('recipeTitle', recipeTitle.value.trim());
      data.append('recipeDesc', recipeDesc.value.trim());
      addNewRecipe(data);
      showAddModal();
      resetInputFields();
    } else {
      return;
    }
  };

  return (
    <div className="container">
      <RecipeForm
        addRecipe={addRecipe}
        inputFields={inputFields}
        setInputFields={setInputFields}
        showAddModal={showAddModal}
        hideAddModal={hideAddModal}
        isShowingAddModal={isShowingAddModal}
        success={success}
        errorAdd={errorAdd}
        successAddMsg={successAddMsg}
      />
    </div>
  );
};

export default AddRecipe;
