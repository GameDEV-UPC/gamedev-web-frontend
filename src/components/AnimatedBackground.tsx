import React, { useEffect, useState } from "react";
import "../styles/components/AnimatedBackground.css";

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
        <div className="backwrap gradient">
            <div className="back-shapes">
                {letters.map(({ letter, top, left, rotation, animationDelay }, index) => (
                    <span
                        key={index}
                        className="floating letter"
                        style={{ top, left, transform: `rotate(${rotation})`, animationDelay }}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default AnimatedBackground;
