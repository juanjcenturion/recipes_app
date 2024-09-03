import FastRecipes from "../FastRecipes/FastRecipes"

//Examples
const recipes = [
    { id: 1, name: 'Fideos con papas', description: 'Deliciosa receta de fideos con papas.' },
    { id: 2, name: 'Receta 2', description: 'Descripción de la receta 2.' },
    { id: 3, name: 'Receta 3', description: 'Descripción de la receta 3.' },
    { id: 4, name: 'Receta 3', description: 'Descripción de la receta 3.' },
];

export default function SpecialRecipes() {
    return (
        <section className="w-full absolute top-28 h-full">
            <div className="grid grid-cols-12">
                <div className="col-span-12 mb-12 mr-4 ml-4 rounded-xl shadow-xl bg-white lg:mb-0 lg:col-span-7">
                    <div className="flex justify-center">
                        <h1 className=" font-bold uppercase py-5 text-2xl text-gray-400 " >
                            Recetas Rapidas
                        </h1>
                    </div>
                    <FastRecipes/>
                </div>
                <div className="col-span-12 mr-4 ml-4 flex justify-center rounded-xl shadow-xl bg-white lg:col-span-5">
                    <h1 className=" font-bold py-5 text-2xl uppercase text-gray-400" >
                        Favoritas    
                    </h1>
                </div>
            </div>
        </section>
    )
}