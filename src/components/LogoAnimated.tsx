import React from "react";
import "../styles/pages/Presentation.css";

function LogoAnimated() {
    return (
        <div className="logo-container">
            <svg viewBox="0 0 1320 200">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    {["G", "A", "M", "E", "D", "E", "V"].map((char, index) => (
                        <tspan key={index}>{char}</tspan>
                    ))}
                </text>
            </svg>
        </div>
    );
}

export default LogoAnimated;
