import { useFav } from "../../context/FavRecipesContext";
import { getAllRecipes } from "../../utils/recipesStorage";
import RecipeItem from "../RecipeItem/RecipeItem";

export default function FavRecipes() {
    const { fav } = useFav();
    const recipes = getAllRecipes();
    
    const favRecipes = recipes.filter(recipe => 
        fav.some(favRecipe => favRecipe.id === recipe.id)
    );

    return (
        <div className="grid grid-cols-12 mx-4 p-4 min-h-[750px] max-h-[750px] overflow-auto">
            {favRecipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}