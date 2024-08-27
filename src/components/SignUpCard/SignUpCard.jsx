
export default function SignUpCard () {

    return (
        <section class="w-full absolute top-18 h-full">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold pt-6 text-center text-red-500 uppercase leading-tight tracking-tight md:text-2xl">
                            Crear una cuenta
                        </h1>
                        <form class="space-y-4 md:space-y-6 px-12 pb-12 pt-6" action="singUp">
                            <div>
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-400">Nombre de usuario</label>
                                <input type="username" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="username" required/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-400">Contraseña</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required/>
                            </div>
                            <div>
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-400">Confirmar Contraseña</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required/>
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500">Acepto los <a class="font-medium text-red-600 hover:underline" href="#">Terminos y Condiciones</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear Cuenta</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Ya tienes una cuenta? <a href="#" class="font-medium text-red-600 hover:underline ">Iniciar Sesión</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    )
}