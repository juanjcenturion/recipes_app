const STORAGE_KEY = 'recipes';


export const getAllRecipes = () => {
  const recipes = localStorage.getItem(STORAGE_KEY);
  return recipes ? JSON.parse(recipes) : [];
};

export const saveRecipe = (recipe) => {
    const recipes = getAllRecipes();
    recipes.push(recipe);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
};

export const updateRecipe = (updatedRecipe) => {
    const recipes = getAllRecipes();
    const index = recipes.findIndex(recipe => recipe.id === updatedRecipe.id);
    if (index !== -1) {
      recipes[index] = updatedRecipe;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    }
};

export const deleteRecipe = (id) => {
    const recipes = getAllRecipes();
    const filteredRecipes = recipes.filter(recipe => recipe.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredRecipes));
};
  

export const getRecipeById = (id) => {
    const recipes = getAllRecipes();
    return recipes.find(recipe => recipe.id === id);
};
