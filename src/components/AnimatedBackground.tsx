import React, { useEffect, useState } from "react";
import "../styles/components/AnimatedBackground.css";

const AnimatedBackground = ({ numLetters = 20 }) => {
    const [letters, setLetters] = useState([]);

    // Generar letras aleatorias con posiciones aleatorias
    useEffect(() => {
        const generateLetters = () => {
            const letterArray = [];
            for (let i = 0; i < numLetters; i++) {
                // Generamos las letras "G" o "D" de manera aleatoria
                const letter = Math.random() > 0.5 ? "G" : "D";
                // Generamos posiciones aleatorias para top, left y la rotación
                const top = `${Math.random() * 100}%`;
                const left = `${Math.random() * 100}%`;
                const rotation = `${Math.random() * 360}deg`;
                const animationDelay = `-${Math.random() * 5}s`;

                letterArray.push({
                    letter,
                    top,
                    left,
                    rotation,
                    animationDelay
                });
            }
            setLetters(letterArray);
        };

        generateLetters();
    }, [numLetters]);

    return (
        <div className="backwrap gradient">
            <div className="back-shapes">
                {letters.map((letterData, index) => (
                    <span
                        key={index}
                        className="floating letter"
                        style={{
                            top: letterData.top,
                            left: letterData.left,
                            transform: `rotate(${letterData.rotation})`,
                            animationDelay: letterData.animationDelay,
                        }}
                    >
                        {letterData.letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default AnimatedBackground;
