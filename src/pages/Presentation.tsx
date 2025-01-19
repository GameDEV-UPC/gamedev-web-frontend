import React, { useState, useEffect } from "react";
import "../styles/pages/Presentation.css";
import Button from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import LogoAnimated from "../components/LogoAnimated.tsx";
import AnimatedBackground from "../components/AnimatedBackground.tsx";

function Presentation() {
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false); // Estado para controlar la visibilidad de los botones

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowButtons(true);
        }, 3500);

        return () => clearTimeout(timeout);
    }, []);
    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/signin");
    };

    return (

        <div className="presentation-container">

            <LogoAnimated />
            <div className={`button-container ${showButtons ? "show" : ""}`}>
                <Button onClick={handleLogin}>LOGIN</Button>
                <Button onClick={handleSignUp}>SIGN UP</Button>
            </div>
            <div className="rotating-line"></div>
        </div>
    );
}

export default Presentation;