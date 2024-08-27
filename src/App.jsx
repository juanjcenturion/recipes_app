import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './utils/router';
import { FavProvider } from './context/FavRecipesContext';

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <FavProvider>
          <NavBar/>
          <Routes>
            {routes.map((data, i)=>(
              <Route
                key={i}
                exact
                path={`/${data.url}`}
                element={<data.element/>}
              />
            ))}
          </Routes>
        </FavProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
