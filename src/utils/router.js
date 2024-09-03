import Home from "../routes/Home";
import Login from "../routes/Login";
import Recetas from "../routes/Recetas";
import SignUp from "../routes/SignUp";

export const routes = [
    {url:'', element: Home},
    {url:'signup', element: SignUp},
    {url:'login', element: Login}
]

export const privateRoutes = [
    {url:'reciepes', element: Recetas},
]