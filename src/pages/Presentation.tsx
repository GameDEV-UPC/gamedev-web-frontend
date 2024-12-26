import React from "react";
import "../styles/pages/Presentation.css";
import Button from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";

function Presentation() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleSignUp = () => {
        navigate("/signin");
    };
    return (
        <div className="presentation-container">
            <h1>GameDev</h1>
            <div className="button-container">
                <Button onClick={handleLogin}>LOGIN</Button>
                <Button onClick={handleSignUp}>SIGN UP</Button>
            </div>
            <div className="rotating-line"></div>
        </div>
    );
}

export default Presentation;