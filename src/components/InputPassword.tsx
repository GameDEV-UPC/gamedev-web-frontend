import React, { useState, useEffect } from "react";
import "../styles/components/InputPassword.css";

function InputPassword() {
    const [value, setValue] = useState<string>("Enter Password");
    const [hide, setHide] = useState<boolean>(true);
    const [displayValue, setDisplayValue] = useState<string>("Enter Password");
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false); // Estado para manejar el enfoque

    // Genera un carácter aleatorio
    const getRandomChar = (): string => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        return chars.charAt(Math.floor(Math.random() * chars.length));
    };

    // Anima la transición al ocultar/mostrar
    const animateTransition = (toHide: boolean): void => {
        setIsAnimating(true);
        const originalValue = value.split("");
        const maskedValue = Array(originalValue.length).fill("#");
        const animationFrames = 15;
        const interval = 20;

        let currentStep = 0;

        const intervalId = setInterval(() => {
            const newDisplay = originalValue.map((char, index) => {
                if (currentStep >= animationFrames)
                    return toHide ? maskedValue[index] : originalValue[index];
                return getRandomChar();
            });

            setDisplayValue(newDisplay.join(""));
            currentStep++;

            if (currentStep > animationFrames) {
                clearInterval(intervalId);
                setIsAnimating(false);
                setDisplayValue(
                    toHide ? maskedValue.join("") : originalValue.join("")
                );
            }
        }, interval);
    };

    // Efecto al cambiar la visibilidad de la contraseña
    useEffect(() => {
        animateTransition(hide);
    }, [hide]);

    // Maneja cambios en el input
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

        if (hide) {
            const visibleLength = displayValue.length;

            if (newValue.length > visibleLength) {
                setValue((prev) => prev + newValue.slice(-1));
            } else if (newValue.length < visibleLength) {
                setValue((prev) => prev.slice(0, -1));
            }

            setDisplayValue("#".repeat(newValue.length));
        } else {
            setValue(newValue);
            setDisplayValue(newValue);
        }
    };

    // Maneja el evento de enfoque
    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    // Maneja el evento de clic para seleccionar todo el texto
    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.target.select(); // Selecciona todo el texto cuando se hace clic
    };

    return (
        <div>
            <ul
                className={`inputPassword ${isFocused ? "focused" : ""}`}
                style={{ display: "flex", alignItems: "center" }}
            >
                <li>
                    <input
                        type="text"
                        value={
                            isAnimating
                                ? displayValue
                                : hide
                                    ? "#".repeat(value.length)
                                    : value
                        }
                        onChange={handleInputChange}
                        onFocus={handleFocus} // Agregamos evento de enfoque
                        onBlur={handleBlur}   // Agregamos evento de desenfoque
                        onClick={handleClick}  // Agregamos evento de clic para seleccionar el texto
                    />
                </li>
                <button className={`show-hide ${isAnimating ? "disabled" : ""}`}
                    onClick={() => setHide((prev) => !prev)}
                    disabled={isAnimating}
                    style={{ marginLeft: "10px" }}
                >
                    <i className={`fas fa-eye${!hide ? "-slash" : ""}`}></i>
                </button>
            </ul>
        </div>
    );
}

export default InputPassword;
