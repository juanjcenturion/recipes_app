import { useState, useEffect } from "react";

export default function RecipesMenu() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 200);
    }, []);

    return (
        <div className={`hover:opacity-100 opacity-80 lg:opacity-100 bg-red-500 lg:min-h-screen text-white mx-2 lg:mx-0 lg:py-0 shadow-lg lg:rounded-l-none rounded-full lg:rounded-tr-3xl lg:rounded-b-3xl transform transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-28 lg:-translate-y-full'}`}>
            <nav className="flex lg:flex-col flex-row justify-center w-full text-sm space-x-5 md:space-x-44 lg:space-x-0 md:text-base lg:space-y-4">
                <button className="bg-red-500 hover:bg-red-700 py-6 lg:py-4 rounded lg:rounded-tr-3xl">Agregar Receta</button>
                <button className="bg-red-500 hover:bg-red-700 py-6 lg:py-4 lg:px-4 rounded">Editar Receta</button>
            </nav>
        </div>
    );
}
