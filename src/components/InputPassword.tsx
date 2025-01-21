import React, { useState, useEffect } from "react";
import '../styles/pages/Login.css'; // Importamos el archivo de estilos CSS

export function InputPassword() {
    const [value, setValue] = useState("Enter Password");
    const [hide, setHide] = useState(true);
    const [displayValue, setDisplayValue] = useState("Enter Password");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const animateTransition = (toHide: boolean): void => {
        setIsAnimating(true);
        const originalValue = value.split("");
        const maskedValue = "#".repeat(originalValue.length).split("");
        const animationFrames = 15;
        const interval = 20;

        let step = 0;

        const intervalId = setInterval(() => {
            setDisplayValue(
                originalValue
                    .map((_, i) => (step >= animationFrames ? (toHide ? "#" : originalValue[i]) : chars.charAt(Math.random() * chars.length)))
                    .join("")
            );

            if (++step > animationFrames) {
                clearInterval(intervalId);
                setIsAnimating(false);
                setDisplayValue(toHide ? maskedValue.join("") : value);
            }
        }, interval);
    };

    useEffect(() => {
        animateTransition(hide);
    }, [hide]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        const originalLength = value.length;

        if (hide) {
            if (newValue.length > originalLength) {
                setValue((prev) => prev + newValue.slice(-1));
            } else if (newValue.length < originalLength) {
                setValue((prev) => prev.slice(0, -1));
            }
            setDisplayValue("#".repeat(newValue.length));
        } else {
            setValue(newValue);
            setDisplayValue(newValue);
        }
    };

    return (
        <div>
            <ul className={`inputPassword ${isFocused ? "focused" : ""}`} style={{ display: "flex", alignItems: "center" }}>
                <li>
                    <input
                        type="text"
                        value={isAnimating ? displayValue : hide ? "#".repeat(value.length) : value}
                        onChange={handleInputChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                </li>
                <button
                    className={`show-hide ${isAnimating ? "disabled" : ""}`}
                    onClick={() => setHide((prev) => !prev)}
                    disabled={isAnimating}
                    style={{ marginLeft: "10px" }}
                >
                    <i className={`fas fa-eye${hide ? "" : "-slash"}`}></i>
                </button>
            </ul>
        </div>
    );
}
export default InputPassword;