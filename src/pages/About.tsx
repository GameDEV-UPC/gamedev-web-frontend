import React, { useEffect, useState } from "react";
import "../styles/pages/About.css";

interface Member {
    name: string;
    photo: string;
}

const About: React.FC = () => {
    const [activeSection, setActiveSection] = useState<"engine" | "videogames">(
        "engine"
    );
    const [engineMembers, setEngineMembers] = useState<Member[]>([]);
    const [videoGameMembers, setVideoGameMembers] = useState<Member[]>([]);

    const fetchRandomUsers = async (count: number): Promise<Member[]> => {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await response.json();
        return data.results.map((user: any) => ({
            name: `${user.name.first} ${user.name.last}`,
            photo: user.picture.large,
        }));
    };

    useEffect(() => {
        const loadMembers = async () => {
            const engine = await fetchRandomUsers(4); // 4 members for Engine
            const videoGames = await fetchRandomUsers(4); // 4 members for Video Games
            setEngineMembers(engine);
            setVideoGameMembers(videoGames);
        };
        loadMembers();
    }, []);

    const handleSwitch = (section: "engine" | "videogames") => {
        setActiveSection(section);
    };

    const currentMembers =
        activeSection === "engine" ? engineMembers : videoGameMembers;

    return (
        <div className="about-container">
            <div className="about-info">
                <h1>About Us</h1>
                <p>
                    Welcome to our organization! We are passionate about developing
                    cutting-edge technologies and creating engaging video game
                    experiences. Learn more about our incredible team by exploring our
                    sections.
                </p>
                <div className="switch-container">
                    <div className="switch-background">
                        <div
                            className={`switch-indicator ${
                                activeSection === "engine" ? "left" : "right"
                            }`}
                        />
                        <button
                            className={`switch-btn ${
                                activeSection === "engine" ? "active" : ""
                            }`}
                            onClick={() => handleSwitch("engine")}
                        >
                            Engine
                        </button>
                        <button
                            className={`switch-btn ${
                                activeSection === "videogames" ? "active" : ""
                            }`}
                            onClick={() => handleSwitch("videogames")}
                        >
                            Video Games
                        </button>
                    </div>
                </div>
            </div>
            <div className="members-container">
                {currentMembers.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.photo} alt={member.name} className="member-photo" />
                        <h3 className="member-name">{member.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
