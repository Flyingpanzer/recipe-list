export const parseRecipeFile = text => {
  const recipeArray = text.split("\r\n\r\n");

  const parsedArray = recipeArray.map(recipeString => {
    const recipeAttributes = recipeString.split("\r\n");

    const recipeTitle = recipeAttributes[0].replace("Title: ", "");
    const recipeYear = recipeAttributes[1].replace("Release Year: ", "");
    const recipeFormat = recipeAttributes[2].replace("Format: ", "");
    const recipeStars = recipeAttributes[3].replace("Stars: ", "");

    return {
      recipeTitle,
      recipeYear,
      recipeFormat,
      recipeStars
    };
  });

  return parsedArray;
};
