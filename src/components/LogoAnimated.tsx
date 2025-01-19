import React from "react";
import "../styles/components/LogoAnimated.css";

// Componente funcional para animar el logo
const LogoAnimated: React.FC = () => {
    return (
        <div className="logo-container">
            <svg viewBox="0 0 1320 200">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    <tspan>G</tspan>
                    <tspan>A</tspan>
                    <tspan>M</tspan>
                    <tspan>E</tspan>
                    <tspan>D</tspan>
                    <tspan>E</tspan>
                    <tspan>V</tspan>
                </text>
            </svg>
        </div>
    );
};
export default LogoAnimated;
