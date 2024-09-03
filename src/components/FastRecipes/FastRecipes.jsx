import { getAllRecipes } from "../../utils/recipesStorage";
import RecipeItem from "../RecipeItem/RecipeItem";


export default function FastRecipes() {
    const recipes = getAllRecipes();

    const fastRecipes = recipes.filter(recipe => recipe.rapida)

    return (
        <div className="grid grid-cols-12 mx-4 p-4 min-h-[750px] max-h-[750px] overflow-auto">
            {fastRecipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    );
}
