import React, { useState } from "react";
import "../styles/pages/About.css";

function About() {
    const [activeSection, setActiveSection] = useState<"engine" | "videogames">("engine");

    const toggleSection = () => {
        setActiveSection((prev) => (prev === "engine" ? "videogames" : "engine"));
    };

    const descriptions = {
        engine: "Our Engine team is dedicated to developing a cutting-edge graphics engine using C++. They focus on optimizing performance and creating realistic visual effects.",
        videogames: "Our Video Games team specializes in crafting engaging and innovative games using Unity. They combine storytelling, gameplay mechanics, and creativity to deliver unforgettable experiences.",
    };

    const members = {
        engine: ["Alice", "Bob", "Charlie"],
        videogames: ["Dave", "Eve", "Frank"],
    };

    return (
        <div className="about-container">
            {/* Descripción global */}
            <section className="global-description fade-in">
                <h1 className="global-title">About Our Association</h1>
                <p>
                    We are a group of passionate students from the EPSEVG, dedicated to creating
                    innovative video games and developing a state-of-the-art graphics engine.
                </p>
            </section>

            {/* Botón único para alternar */}
            <div className="switch-container">
                <button onClick={toggleSection} className="switch-button">
                    {activeSection === "engine" ? "Switch to Video Games" : "Switch to Engine"}
                </button>
            </div>

            {/* Sección dinámica */}
            <section className={`members-section ${activeSection} fade-in`}>
                <h2 className="section-title">
                    {activeSection === "engine" ? "Engine Team" : "Video Games Team"}
                </h2>
                <p className="section-description">{descriptions[activeSection]}</p>
                <div className="members-grid">
                    {members[activeSection].map((member, idx) => (
                        <div className="member-card" key={idx}>
                            <img
                                src={`https://via.placeholder.com/150?text=${member}`}
                                alt={member}
                                className="member-image"
                            />
                            <p className="member-name">{member}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
