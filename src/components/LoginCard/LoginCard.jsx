import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { useState } from "react";

export default function LoginCard () {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuth();
    const [error, setError] = useState(null);
    const nav = useNavigate();

    const handleSubmit = async (e) => {
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            await login(username, password);
            nav('/');
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
                            Iniciar Sesión
                        </h1>
                        <form className="space-y-4 md:space-y-6 px-12 pt-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-400">Nombre de usuario</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                    placeholder="username"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-400">Contraseña</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button type="submit" className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Iniciar Sesión</button>
                        </form>
                        <p className="text-sm font-light pb-12 text-center text-gray-500 dark:text-gray-400">
                            ¿No tienes cuenta? <button onClick={() => nav('/signup')} className="font-medium text-red-600 hover:underline">Crear Cuenta</button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}