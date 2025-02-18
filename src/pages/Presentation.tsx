import React, { useState, useEffect } from "react";
import "../styles/pages/Presentation.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import LogoAnimated from "../components/LogoAnimated";

function Presentation() {
    const navigate = useNavigate();
    const [showButtons, setShowButtons] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const animationState = localStorage.getItem("presentationAnimated");
        if (animationState === "true") {
            setHasAnimated(true);
            setShowButtons(true);
        } else {
            const timeout = setTimeout(() => setShowButtons(true), hasAnimated ? 1000 : 3000);
            localStorage.setItem("presentationAnimated", "true");
            return () => clearTimeout(timeout);
        }
    }, [hasAnimated]);

    const handleNavigate = (path) => navigate(path);

    const renderButtons = () => (
        <div className={`button-container ${showButtons ? "show" : ""}`}>
            <Button onClick={() => handleNavigate("/login")} aria-label="Go to Login Page">
                LOGIN
            </Button>
            <Button onClick={() => handleNavigate("/signup")} aria-label="Go to Sign Up Page">
                SIGN UP
            </Button>
        </div>
    );

    return (
        <div className="presentation-container">
            <LogoAnimated animate={!hasAnimated} />
            {renderButtons()}
            <div className="rotating-line"></div>
        </div>
    );
}

export default Presentation;