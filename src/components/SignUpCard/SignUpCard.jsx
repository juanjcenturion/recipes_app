import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignUpCard () {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { register } = useAuth()

    const navigate = useNavigate()

    const manageRegister = (e) => {
        try {
            register(user, password)
            
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section className="w-full absolute top-18 h-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold pt-6 text-center text-red-500 uppercase leading-tight tracking-tight md:text-2xl">
                            Crear una cuenta
                        </h1>
                        <form className="space-y-4 md:space-y-6 px-12 pt-6" onSubmit={() => manageRegister()}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-400">Nombre de usuario</label>
                                <input type="username" name="username" id="username" value={user} onChange={(e) => setUser(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="username" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">Contraseña</label>
                                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required/>
                            </div>
                            {/* <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-400">Confirmar Contraseña</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5" required/>
                            </div> */}
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">Acepto los <a className="font-medium text-red-600 hover:underline" href="#">Terminos y Condiciones</a></label>
                                </div>
                            </div>
                            <button type="submit" className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Crear Cuenta</button>
                        </form>
                        <p className="text-sm font-light pb-12 text-center text-gray-500 dark:text-gray-400">
                                Ya tienes una cuenta? <a onClick={() => navigate('/login')} className="font-medium text-red-600 hover:underline ">Iniciar Sesión</a>
                            </p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}