import React, { useEffect, useState } from "react";
import "../styles/components/AnimatedText.css";

interface AnimatedTextProps {
    children: string; // El texto a mostrar
    size?: string; // Tamaño del texto
    primaryColor?: string; // Color principal del texto
    glitchColor?: string; // Color de las letras glitcheadas
    glitchInterval?: number; // Intervalo entre los cambios de caracteres (en milisegundos)
    probability?: number; // Probabilidad de que un carácter se glitchee
    glow?: boolean; // Activar el efecto de brillo
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
                                                       children,
                                                       size = "2rem",
                                                       primaryColor = "#fff",
                                                       glitchColor = "#ff0080",
                                                       glitchInterval = 800,
                                                         probability = 0.98,
                                                        glow = false
                                                   }) => {
    const [text, setText] = useState(children);

    useEffect(() => {
        const glitchCharacters = "!@#$%^&*()_+1234567890<>?/|[]{}-="; // Caracteres aleatorios para el glitch
        let interval: NodeJS.Timeout;

        const glitchText = () => {
            const textArray = children.split("");
            const newText = textArray.map((char) => {
                if (Math.random() > probability) {
                    // Cambiar aleatoriamente un 10% de las letras
                    return glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)];
                }
                return char;
            });
            setText(newText.join(""));
        };

        interval = setInterval(glitchText, glitchInterval);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, [children, glitchInterval]);

    return (
        <div
            className="animated-text"

            style={{
                fontSize: size,
                color: primaryColor,
                textShadow: glow ? "1px 0 10px rgba(255, 255, 255, 0.8), 0 0 20px #ff00ff" : "none",
            }}
        >
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={char !== children[index] ? "glitch-char" : ""}
                    style={{
                        color: char !== children[index] ? glitchColor : primaryColor,
                    }}
                >
          {char}
        </span>
            ))}
        </div>
    );
};

export default AnimatedText;
