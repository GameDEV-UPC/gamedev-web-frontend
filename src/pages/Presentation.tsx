import React from "react";
import "../styles/pages/Presentation.css";
import Button from "../components/Button.tsx";
import { useNavigate } from "react-router-dom";
import AnimatedText from "../components/AnimatedText.tsx";

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
            <AnimatedText
                size={"100px"}
                primaryColor={"#ffffff"}
                glitchColor={"#dca5dc"}
                glitchInterval={300}
                probability={0.9}
                glow={true}
            >GameDev</AnimatedText>
            <div className="button-container">
                <Button onClick={handleLogin}>
                    LOGIN</Button>
                <Button onClick={handleSignUp}>SIGN UP</Button>
            </div>
            <div className="rotating-line"></div>
        </div>
    );
}

export default Presentation;