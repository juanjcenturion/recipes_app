
export default function LoginCard () {

    return (
        <section class="w-full absolute top-18 h-full">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold pt-6 text-center text-red-500 uppercase leading-tight tracking-tight md:text-2xl">
                            Iniciar Sesión
                        </h1>
                        <form class="space-y-4 md:space-y-6 px-12 pb-12 pt-6" action="login">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-400">Nombre de usuario</label>
                                <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="username" required/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-400">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required/>
                            </div>
                            <button type="submit" class="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Iniciar Sesión</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                No tienes cuenta? <a href="#" class="font-medium text-red-600 hover:underline ">Crear Cuenta</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}