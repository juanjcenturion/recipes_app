

export default function RecipeItem({recipe}) {
    return (
        <div className="col-span-12 p-4 lg:mx-4 mb-4 border rounded-lg shadow-md">
            <div className="col-span-12 flex justify-between">
                <div className="flex flex-col">
                    <h4 className="flex justify-start pb-3 text-xl text-gray-600 font-semibold uppercase ">{ recipe.nombre }</h4>
                </div>
                <div>
                    <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                    </svg> 
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    {recipe.urlImg ?( 
                        <img src={recipe.urlImg} alt="" className="flex justify-start items-center text-center bg-red-300 w-24 h-24 lg:w-32 object-cover rounded-lg shadow-lg lg:h-32" />
                    ): (
                        <img src="https://img.freepik.com/foto-gratis/composicion-deliciosa-comida-brasilena-alto-angulo_23-2148739223.jpg" alt="fotito" className="flex justify-start rounded-lg shadow-lg items-center text-center bg-red-300 w-24 h-24 lg:w-32 object-cover lg:h-32"/>
                    )}
                </div>
                <div className="col-span-10 px-2">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 text-sm lg:text-base">
                                <strong>Ingredientes:</strong> {recipe.ingredientes}.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 text-sm lg:text-base">
                                <strong>Procedimiento:</strong> {recipe.procedimiento}.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 text-sm lg:text-base">
                                <strong>Tiempo de preparación:</strong> {recipe.tiempo} minutos.
                            </p>
                        </div>
                        <div className="col-span-12">
                            <p className="text-gray-600 mt-2 text-sm lg:text-base">
                                <strong>Receta Rápida:</strong> {recipe.rapida ? 'Sí.' : 'No.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
