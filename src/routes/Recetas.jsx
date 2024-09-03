import { useState, useEffect } from "react";
import AllRecipesCard from "../components/AllRecipesCard/AllRecipesCard";
import RecipesManageCard from "../components/RecipesManageCard/RecipesManageCard";
import RecipesMenu from "../components/RecipesMenu/RecipesMenu";
import { getAllRecipes, saveRecipe, deleteRecipe } from "../utils/recipesStorage";

export default function Recetas() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Cargar las recetas cuando se monta el componente
        const storedRecipes = getAllRecipes();
        setRecipes(storedRecipes);
    }, []);

    const handleAddRecipe = (newRecipe) => {
        saveRecipe(newRecipe);
        setRecipes((prevRecipes) => [...prevRecipes, newRecipe]); // Actualiza el estado local
    };

    const handleDeleteRecipe = (recipeId) => {
        deleteRecipe(recipeId);
        setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== recipeId)); // Actualiza el estado local
    };

    return (
        <div className="grid grid-cols-12 mb-24 h-full">
            {/* <div className="col-span-12 mt-2 lg:col-span-1 lg:mt-20">
                <RecipesMenu />
            </div> */}
            <div className="col-span-12 mx-2 lg:ml-4 py-2 px-2 mt-6 rounded-3xl border shadow-2xl lg:min-h-screen lg:col-span-6 lg:mt-24">
                <RecipesManageCard onAddRecipe={handleAddRecipe} />
            </div>
            <div className="col-span-12 max-h-dvh border shadow-2xl mx-2 lg:mx-4 mt-6 py-2 px-2 rounded-3xl lg:min-h-screen lg:col-span-6 lg:mt-24">
                <AllRecipesCard recipes={recipes} onDeleteRecipe={handleDeleteRecipe} />
            </div>
        </div>
    );
}
