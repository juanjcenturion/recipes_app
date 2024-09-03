import { createContext, useContext, useState } from "react";
import { getFav, addRecipeToFav, removeRecipeFromFav } from "../utils/favRecipesStorage";

const FavContext = createContext();


export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState(getFav());

    const addToFav = (recipe) => {
        addRecipeToFav(recipe);
        alert('Producto Añadidio a Favs.')
        setFav(getFav())
    }

    const removeToFav = (recipe) => {
        removeRecipeFromFav(recipe);
        alert('Producto removido de Favs.')
        setFav(getFav())
    }

    return ( 
        <FavContext.Provider value={{fav, addToFav, removeToFav}}>
            {children}
        </FavContext.Provider>
    )
}

export const useFav = () => {return useContext(FavContext)}