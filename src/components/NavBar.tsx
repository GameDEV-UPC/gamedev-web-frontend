import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Mantenemos useLocation
import "../styles/components/NavBar.css";
import NoiseButton from "./NoiseButton.tsx";

function NavBar() {
    const [activeLink, setActiveLink] = useState<number>(1);
    const location = useLocation();

    const options = [
        { value: "1", label: "My Stats", path: "/mystats" }, // Agregar path
        { value: "2", label: "Home", path: "/" ,}, // Agregar path
        { value: "3", label: "About", path: "/about" } // Agregar path
    ];

    useEffect(() => {
        const path = location.pathname;
        if (path === '/') setActiveLink(0);
        if (path === '/mystats') setActiveLink(1);
        if (path === '/about') setActiveLink(2);
    }, [location.pathname]);

    return (
        <header className="main-container">
            <h1 className="logo">GameDev</h1>

            <nav className="nav-container">
                <NoiseButton options={options} />
            </nav>
        </header>
    );
};

export default NavBar;
