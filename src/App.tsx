import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importar Router y sus componentes
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MyStats from './pages/MyStats.tsx';
import About from './pages/About';
import Login from './pages/Login';
import SignIn from './pages/SignIn';  // Asegúrate de tener la ruta para SignIn
import './styles/styles.css';
import Presentation from "./pages/Presentation.tsx";

function App() {
    return (
        <Router>
            <NavbarAndRoutes />
        </Router>
    );
}

const NavbarAndRoutes: React.FC = () => {
    const location = window.location.pathname;

    return (
        <>
            {/* Mostrar el Navbar solo si no estamos en '/login' o '/sign-in' */}
            {location !== '/login' && location !== '/signin'  && location !== '/' && <Navbar /> }
            <Routes>
                <Route path="/" element={<Presentation />} />
                <Route path="/home" element={<Home />} /> {/* Ruta para la página de inicio */}
                <Route path="/mystats" element={<MyStats />} /> {/* Ruta para la página de estadísticas */}
                <Route path="/about" element={<About />} /> {/* Ruta para la página "About Us" */}
                <Route path="/login" element={<Login />} />  {/* Ruta para la página de login */}
                <Route path="/signin" element={<SignIn />} />  {/* Ruta para la página de signin */}
            </Routes>
        </>
    );
};

export default App;
