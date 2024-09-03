
import RecipeItem from "../RecipeItem/RecipeItem"

export default function AllRecipesCard({ recipes, onDeleteRecipe }) {
    
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="flex justify-center">
                    <h1 className="font-bold uppercase py-5 text-2xl text-gray-400">
                        Recetas
                    </h1>
                </div>
            </div>
            <div className="col-span-12">
                {recipes.length > 0 ? (
                    <div className="grid grid-cols-12 max-h-[800px] gap-4 overflow-auto">
                        {recipes.map((recipe, index) => (
                            <RecipeItem key={index} recipe={recipe} onDeleteRecipe={onDeleteRecipe} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center mb-4 text-gray-500">
                        No hay recetas disponibles.
                    </div>
                )}
            </div>
        </div>
    )
}