import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MyStats from './pages/MyStats.tsx';
import About from './pages/About';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import './styles/styles.css';
import Presentation from './pages/Presentation.tsx';
import AnimatedBackground from "./components/AnimatedBackground.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>
                <AnimatedBackground />
                <NavbarAndRoutes />
            </Router>
        </AuthProvider>
    );
}

const NavbarAndRoutes: React.FC = () => {
    const location = useLocation(); // Hook para obtener la ubicación actual

    // Define las rutas donde se debe mostrar el Navbar
    const showNavbarPaths = ['/leaderboard', '/mystats', '/about'];

    return (
        <>
            {/* Muestra el Navbar solo si la ruta actual no está en hideNavbarRoutes */}
            {showNavbarPaths.includes(location.pathname) && <Navbar />}
            <Routes>
                {/* Rutas públicas */}
                <Route path="/home" element={<Presentation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />

                {/* Rutas protegidas */}
                <Route
                    path="/leaderboard"
                    element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/mystats"
                    element={
                        <ProtectedRoute>
                            <MyStats />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <ProtectedRoute>
                            <About />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </>
    );
};


export default App;
