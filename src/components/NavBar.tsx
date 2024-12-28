import React, { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom"; // Mantenemos useLocation
import "../styles/components/NavBar.css";
import NoiseButton from "./NoiseButton.tsx";


import defaultProfileIcon from "../assets/images/profile-icon-default.png";
import AnimatedText from "./AnimatedText.tsx";

function NavBar() {
    const [activeLink, setActiveLink] = useState<number>(1);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para sesión
    const [profilePicture, setProfilePicture] = useState<string | null>(null); // Foto de perfil
    const location = useLocation();
    const navigate = useNavigate();
    const options = [
        { value: "1", label: "My Stats", path: "/mystats" }, // Agregar path
        { value: "2", label: "Home", path: "/home" }, // Agregar path
        { value: "3", label: "About", path: "/about" } // Agregar path
    ];

    useEffect(() => {
        const path = location.pathname;
        if (path === '/home') setActiveLink(0);
        if (path === '/mystats') setActiveLink(1);
        if (path === '/about') setActiveLink(2);

        // Simular si hay una sesión activa (puedes conectarlo a tu lógica real)
        const loggedIn = false; // Cambiar según tu estado real
        setIsLoggedIn(loggedIn);

        // Si hay sesión activa, cargar foto de perfil
        if (loggedIn) {
            setProfilePicture(defaultProfileIcon); // Cambiar por la lógica real
        }
    }, [location.pathname]);

    return (
        <header className="main-container">

            <div className="logo">
                <AnimatedText
                    size={50}
                    glitchColors={["red", "black", "white"]}
                    glitchInterval={200}
                    probability={0.9}
                    glow={true}
                >
                    GameDev
                </AnimatedText>
            </div>


                <NoiseButton options={options} />







        </header>
    );
}

export default NavBar;
