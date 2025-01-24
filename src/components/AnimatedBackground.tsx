import React, { useEffect, useState } from "react";
import "../styles/components/AnimatedBackground.scss";

function AnimatedBackground({ numLetters = 20 }) {
    const [letters, setLetters] = useState(() => generateLetters(numLetters));

    // Función para generar letras aleatorias con posiciones y estilos
    function generateLetters(count) {
        return Array.from({ length: count }, () => ({
            letter: Math.random() > 0.5 ? "G" : "D",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotation: `${Math.random() * 360}deg`,
            animationDelay: `-${Math.random() * 5}s`,
        }));
    }

    useEffect(() => {
        setLetters(generateLetters(numLetters));
    }, [numLetters]);

    return (

            <div className="wrap">
                <div className="bottom-plane"></div>
            </div>

    );
}

export default AnimatedBackground;
