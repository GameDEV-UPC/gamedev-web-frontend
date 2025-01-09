import { useState } from "react";
import "../styles/components/Button.css";

interface ButtonProps {
    children: string;
    onClick?: () => void; // Prop para pasar una función personalizada al hacer clic
}
const Button = ({ children, onClick }: ButtonProps) => {
    const [animatedText, setAnimatedText] = useState(children);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        animateText(); // Iniciar la animación del texto al hacer hover
    };

    // Genera un carácter aleatorio
    const getRandomChar = (): string => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    // Función para animar el texto
    const animateText = () => {
        if (isAnimating) return; // Evita reiniciar la animación mientras está activa
        setIsAnimating(true);

        const originalText = children.split("");
        const animationFrames = 15; // Número de cuadros de la animación
        const interval = 30; // Intervalo en milisegundos

        let currentStep = 0;

        const intervalId = setInterval(() => {
            const newDisplay = originalText.map((_, index) => {
                if (currentStep >= animationFrames) return originalText[index];
                return getRandomChar();
            });

            setAnimatedText(newDisplay.join("")); // Actualiza el texto con caracteres aleatorios
            currentStep++;

            if (currentStep > animationFrames) {
                clearInterval(intervalId);
                setIsAnimating(false);
                setAnimatedText(children); // Restaura el texto original
            }
        }, interval);
    };

    // Manejador de clic que llama a la función onClick pasada como prop
    const handleClick = () => {
        if (onClick) {
            onClick(); // Ejecuta la función onClick pasada como prop
        }
        animateText(); // Realiza la animación al hacer clic
    };

    return (
        <button
            className="animated-button"
            onClick={handleClick} // Usa el manejador handleClick
            onMouseEnter={handleMouseEnter}
        >
            <span>{animatedText}</span>
        </button>
    );
};

export default Button;
