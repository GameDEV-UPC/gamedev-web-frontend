import React, { useEffect, useState } from "react";
import "../styles/pages/Presentation.css";

function LogoAnimated({ animate }) {
    const [isAnimating, setIsAnimating] = useState(animate);

    useEffect(() => {
        if (animate) {
            setIsAnimating(true);
        }
    }, [animate]);

    return (
        <div className="logo-container">
            <svg
                viewBox="0 0 1320 300"
                className={`animated-logo ${isAnimating ? "animate" : ""}`}
            >
                <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                    {["G", "A", "M", "E", "D", "E", "V"].map((char, index) => (
                        <tspan
                            key={index}
                            style={{ animationDelay: `${ (index * 0.2)}s` }}
                        >
                            {char}
                        </tspan>
                    ))}
                </text>
            </svg>
        </div>
    );
}

export default LogoAnimated;