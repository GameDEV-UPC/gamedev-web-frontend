import React, { useState, useEffect } from "react";
import "../styles/pages/Presentation.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LogoAnimated from "../components/LogoAnimated";
import AnimatedBackground from "../components/AnimatedBackground";

function Presentation() {
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);

    // Mostrar los botones después de un retraso
    useEffect(() => {
        const timeout = setTimeout(() => setShowButtons(true), 3500);
        return () => clearTimeout(timeout);
    }, []);

    // Manejar navegación
    const handleNavigate = (path) => navigate(path);

    // Renderizar botones condicionalmente
    const renderButtons = () => (
        <div className={`button-container ${showButtons ? "show" : ""}`}>
            <Button onClick={() => handleNavigate("/login")} aria-label="Go to Login Page">LOGIN</Button>
            <Button onClick={() => handleNavigate("/signup")} aria-label="Go to Sign Up Page">SIGN UP</Button>
        </div>
    );

    return (
        <div className="presentation-container">
            <LogoAnimated />
            {renderButtons()}
            <div className="rotating-line"></div>
        </div>
    );
}

export default Presentation;
