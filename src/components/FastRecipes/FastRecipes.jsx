import RecipeItem from "../RecipeItem/RecipeItem";

//Examples
const recipes = [
    { id: 1, name: 'Fideos con papas', description: 'Deliciosa receta de fideos con papas.' },
    { id: 2, name: 'Receta 2', description: 'Descripción de la receta 2.' },
    { id: 3, name: 'Receta 3', description: 'Descripción de la receta 3.' },
    { id: 4, name: 'Receta 3', description: 'Descripción de la receta 3.' },
];

export default function FastRecipes() {
    return (
        <div className="grid grid-cols-12 mx-4 p-4 min-h-[750px] max-h-[750px] overflow-auto">
            {recipes.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe}/>
            ))}
        </div>
    );
}
