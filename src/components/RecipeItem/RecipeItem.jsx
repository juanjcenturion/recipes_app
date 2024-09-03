import React from "react";
import { useFav } from "../../context/FavRecipesContext";
import { getAllRecipes } from "../../utils/recipesStorage";

export default function RecipeItem({ recipe, onDeleteRecipe }) {
    const { fav, addToFav, removeToFav } = useFav();
    const isFav = fav.some(favRecipe => favRecipe.id === recipe.id);

    const handleFavClick = () => {
        if (isFav) {
            removeToFav(recipe.id);
        } else {
            addToFav(recipe.id);
        }
    };

    const handleDelete = () => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar la receta "${recipe.nombre}"?`)) {
            if (onDeleteRecipe) onDeleteRecipe(recipe.id);
        }
    }

    

    return (
        <div className="col-span-12 lg:mx-4 mb-4 border border-b-0 rounded-3xl max-h-[220px] md:max-h-[220px] lg:max-h-[230px] shadow-md">
            <div className="col-span-12 pt-4 pl-4 pr-4 flex justify-between">
                <div className="flex flex-col">
                    <h4 className="flex justify-start pb-3 text-xl text-gray-600 font-semibold uppercase ">{recipe.nombre}</h4>
                </div>
                <div onClick={handleFavClick} className="cursor-pointer">
                    <svg
                        className={`w-6 h-6 ${isFav ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                        />
                    </svg>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-4 sm:col-span-2 mt-3 ml-4">
                    {recipe.urlImg ? (
                        <img
                            src={recipe.urlImg}
                            alt=""
                            className="flex justify-start items-center text-center bg-red-300 w-24 h-24 lg:w-32 object-cover rounded-lg shadow-lg lg:h-32"
                        />
                    ) : (
                        <img
                            src="https://img.freepik.com/foto-gratis/composicion-deliciosa-comida-brasilena-alto-angulo_23-2148739223.jpg"
                            alt="fotito"
                            className="flex justify-start rounded-lg shadow-lg items-center text-center bg-red-300 w-24 h-24 lg:w-32 object-cover lg:h-32"
                        />
                    )}
                </div>
                <div className="col-span-8 sm:col-span-10 ml-2 mr-4 px-2">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 truncate text-sm lg:text-base text-right md:text-left">
                                <strong>Ingredientes:</strong> {recipe.ingredientes}.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 truncate text-sm lg:text-base text-right md:text-left">
                                <strong>Procedimiento:</strong> {recipe.procedimiento}.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 text-sm truncate text-right md:text-left lg:text-base">
                                <strong className="truncate">Tiempo de preparación:</strong> {recipe.tiempo} minutos.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 truncate text-sm text-right md:text-left lg:text-base">
                                <strong>Receta Rápida:</strong> {recipe.rapida ? 'Sí.' : 'No.'}
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={handleDelete}  className="col-span-12 mx-0 pb-1 pt-1 mt-3 bg-red-500 uppercase text-white font-bold w-full rounded-b-xl hover:bg-red-700">Borrar Receta</button>
            </div>
            
        </div>
    );
}
