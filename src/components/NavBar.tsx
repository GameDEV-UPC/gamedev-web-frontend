import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Importar Link y useLocation
import "../styles/components/NavBar.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState<number>(0); // Estado para mantener el enlace activo
  const underlineRef = useRef<HTMLDivElement>(null);
  const location = useLocation(); // Detecta la URL actual

  // Detectar qué enlace debe estar activo según la URL
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveLink(0);
    if (path === '/mystats') setActiveLink(1);
    if (path === '/about') setActiveLink(2);
  }, [location.pathname]);

  // Función para ajustar el subrayado de acuerdo al tamaño de la ventana
  const adjustUnderline = () => {
    const underline = underlineRef.current;
    const activeLinkElement = document.querySelectorAll(".link")[activeLink] as HTMLAnchorElement;

    if (underline && activeLinkElement) {
      underline.style.width = `${activeLinkElement.offsetWidth}px`;
      underline.style.left = `${activeLinkElement.offsetLeft}px`;
    }
  };

  // Se ejecuta cuando el componente se monta y cada vez que se redimensiona la ventana
  useEffect(() => {
    adjustUnderline(); // Ajuste inicial
    window.addEventListener("resize", adjustUnderline); // Ajuste cuando se redimensiona

    return () => {
      window.removeEventListener("resize", adjustUnderline); // Limpiar evento
    };
  }, [activeLink]); // Dependencia de activeLink para ajustar el subrayado cada vez que cambia

  return (
    <header className="main-container">
      {/* Imagen del logo */}
      <img
        loading="lazy"
        src="./src/assets/images/logogmail.png"
        alt="Logo"
        className="img"
      />
      {/* Navegación */}
      <nav className="nav-container">
        <Link
          to="/"
          className={`link ${activeLink === 0 ? "active" : ""}`}
        >
          HOME
        </Link>
        <Link
          to="/mystats"
          className={`link ${activeLink === 1 ? "active" : ""}`}
        >
          MY STATS
        </Link>
        <Link
          to="/about"
          className={`link ${activeLink === 2 ? "active" : ""}`}
        >
          ABOUT US
        </Link>
        <div className="underline" ref={underlineRef}></div>
      </nav>
    </header>
  );
};

export default NavBar;
