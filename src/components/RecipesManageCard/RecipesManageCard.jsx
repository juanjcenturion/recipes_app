import { useState } from "react";
import { saveRecipe } from "../../utils/recipesStorage";

export default function RecipesManageCard({ onAddRecipe }) {
    const [nombre, setNombre] = useState("");
    const [rapida, setRapida] = useState(false);
    const [ingredientes, setIngredientes] = useState("");
    const [procedimiento, setProcedimiento] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [urlImg, setUrlImg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form llamado')

        const newRecipe = {
            id: Date.now(),
            nombre,
            ingredientes,
            procedimiento,
            tiempo,
            rapida,
            urlImg,
        };

        
        if (onAddRecipe) onAddRecipe(newRecipe);

        setNombre('');
        setIngredientes('');
        setProcedimiento('');
        setTiempo('');
        setRapida(false);
        setUrlImg('');
    };

    return(
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="flex justify-center">
                    <h1 className=" font-bold uppercase py-5 text-2xl text-gray-400 " >
                        Agregar Receta Nueva
                    </h1>
                </div>
            </div>
            <div className="col-span-12">
                <form className="" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-12">
                        <div className="col-span-8">
                            <div className="relative z-0 px-4 w-full mb-5 group">
                                <input type="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)} name="floating_nombre" id="floating_nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                                <label htmlFor="floating_nombre" className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Nombre</label>
                            </div>
                        </div>
                        <div className="col-span-4 flex flex-row align-middle justify-end mr-2 items-center">
                            <label htmlFor="terms" className="ms-2 mr-2 text-sm items-center text-gray-400">Receta Rapida</label>
                            <input id="terms" type="checkbox" checked={rapida} onChange={(e)=> setRapida(e.target.checked)} className="w-4 h-4 border text-red-600 checked:bg-red-600 checked:text-red-600 border-gray-300 rounded bg-red-400 focus:ring-3 focus:ring-red-600"/>
                        </div>
                    </div>
                    <div className="relative z-0 px-4 mt-12 w-full mb-5 group">
                        <textarea type="ingredientes" value={ingredientes} onChange={(e)=> setIngredientes(e.target.value)} name="floating_ingredientes" id="floating_ingredientes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none outline-none focus:ring-0 focus:h-48 transition-all ease-in-out duration-500 focus:border-gray-500 peer" placeholder=" " required />
                        <label htmlFor="floating_ingredientes" className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-7 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-11">Ingredientes</label>
                    </div>
                    <div className="relative z-0 px-4 mt-12 w-full mb-5 group">
                        <textarea type="ingredientes" value={procedimiento} onChange={(e)=> setProcedimiento(e.target.value)} name="floating_ingredientes" id="floating_ingredientes" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none outline-none focus:ring-0 focus:h-48 transition-all ease-in-out duration-500 focus:border-gray-500 peer" placeholder=" " required />
                        <label htmlFor="floating_ingredientes" className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-10 scale-75 top-7 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-11">Procedimiento</label>
                    </div>
                    <div className="relative z-0 mt-10 px-4 w-full mb-5 group">
                        <input type="number" value={tiempo} onChange={(e)=> setTiempo(e.target.value)} name="floating_nombre" id="floating_nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                        <label htmlFor="floating_nombre" className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Tiempo de preparación (minutos)</label>
                    </div>
                    <div className="relative z-0 mt-10 px-4 w-full mb-5 group">
                        <input type="text" value={urlImg} onChange={(e)=> setUrlImg(e.target.value)} name="floating_imgurl" id="floating_imgurl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-500 peer" placeholder=" " required />
                        <label htmlFor="floating_imgurl" className="peer-focus:font-bold absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6">Url de imagen</label>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 flex justify-center w-full mt-12">
                            <button type="submit" className="text-white w-full mx-2 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center ">Agregar Receta</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}