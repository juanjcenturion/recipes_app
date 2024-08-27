import FastRecipes from "../FastRecipes/FastRecipes"


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