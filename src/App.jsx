import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { routes, privateRoutes } from './utils/router';
import { FavProvider } from './context/FavRecipesContext';
import { AuthContext, AuthProvider, useAuth } from './context/AuthContext';

function App() {
  const {isAuth} = useAuth();

  console.log('Auth:', isAuth)

  return (
    <div>
      <BrowserRouter>
        <FavProvider>
          <NavBar/>
          <Routes>
            {routes.map((data, i) => (
              <Route
                key={i}
                exact
                path={`/${data.url}`}
                element={<data.element />}
              />
            ))}

            {privateRoutes.map((data, i) => (
              <Route
                key={i}
                path={`/${data.url}`}
                element={isAuth ? <data.element /> : <Navigate to="/login" />}
              />
            ))}
          </Routes>
        </FavProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
