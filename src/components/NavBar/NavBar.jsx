import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const getButtonClasses = (path) => {
        return location.pathname === path
            ? "inline-flex flex-col cursor-pointer py-4 col-span-4 items-center justify-center px-5 bg-gray-100 text-red-500 rounded-3xl rounded-t-none rounded-bl-none group lg:rounded-b-none "
            : "inline-flex flex-col cursor-pointer py-4 col-span-4 items-center justify-center px-5 hover:bg-red-700 text-gray-100 rounded-3xl rounded-bl-none group lg:rounded-bl-3xl lg:rounded-tl-none";
    };

    const getIconClasses = (path) => {
        return location.pathname === path
            ? "w-6 h-6 mb-1 text-red-500"
            : "w-6 h-6 mb-1 text-gray-100 group-hover:text-gray-200";
    };

    return (
        <section className="fixed bottom-0 z-50 w-full shadow-md h-16 border-t lg:bottom-auto lg:top-0 lg:border-t-0 lg:border-b">
            <div className="grid h-full grid-cols-12 font-medium">
                <div className="inline-flex flex-col col-span-2 items-center justify-center px-5 bg-gray-100 lg:col-span-1">
                    <img src="icon.png" alt="icon" className="-rotate-45 hover:animate-bounce" />
                </div>
                <div className="grid h-full col-span-10 font-medium bg-gray-100 lg:col-span-11">
                    <div className="grid h-full grid-cols-12 font-medium rounded-3xl rounded-r-none rounded-b-none bg-red-500 lg:rounded-t-none lg:rounded-r-none lg:rounded-3xl">
                        <button
                            onClick={() => navigate('/')}
                            className={getButtonClasses('/')}
                        >
                            <svg className={getIconClasses('/')} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                            <span className="text-sm group-focus:text-red-700">Home</span>
                        </button>
                        <button
                            onClick={() => navigate('/reciepes')}
                            className={getButtonClasses('/reciepes')}
                        >
                            <svg className={getIconClasses('/reciepes')} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z"/>
                            </svg>
                            <span className="text-sm group-focus:text-red-700">Recetas</span>
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className={getButtonClasses('/login')}
                        >
                            <svg className={getIconClasses('/login')} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/>
                            </svg>
                            <span className="text-sm group-focus:text-red-700">Inciar sesión</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NavBar;
