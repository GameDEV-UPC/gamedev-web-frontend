import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider';
import { ProtectedRoute } from './components/ProtectedRoute';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import MyStats from './pages/MyStats';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp.tsx';
import './styles/styles.css';
import Presentation from './pages/Presentation';
import AnimatedBackground from "./components/AnimatedBackground";

// Componente principal
function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="app-container">
                    {/* Fondo animado */}
                    <AnimatedBackground />

                    {/* Contenido principal */}
                    <MainContent />
                </div>
            </Router>
        </AuthProvider>
    );
}

// Componente para gestionar el Navbar y las rutas
function MainContent() {
    const location = useLocation();

    function shouldShowNavbar(pathname) {
        const showNavbarPaths = ['/leaderboard', '/mystats', '/about'];
        return showNavbarPaths.includes(pathname);
    }

    return (
        <>
            {shouldShowNavbar(location.pathname) && <Navbar />}
            <Routes>
                {/* Rutas públicas */}
                <Route path="/home" element={<Presentation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />

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
}

export default App;
