const FAV_KEY = "recipes_fav";

export const getFav = () => {
    const fav = localStorage.getItem(FAV_KEY);
    return fav ? JSON.parse(fav) : [];
}

export const addRecipeToFav = (recipeId) => {
    const fav = getFav();
    const existingRecipeIndex = fav.findIndex(recipe => recipe.id = recipeId)
    
    fav.push({id: recipeId})
    
    localStorage.setItem(FAV_KEY, JSON.stringify(fav))
}

export const removeRecipeFromFav = (recipeId) => {
    const fav = getFav();
    fav = fav.filter(recipe => recipe.id !== recipeId)

    localStorage.setItem(FAV_KEY, JSON.stringify(fav))
}