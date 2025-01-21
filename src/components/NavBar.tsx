import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/components/NavBar.css";
import NoiseButton from "./NoiseButton.tsx";
import AnimatedText from "./AnimatedText.tsx";
import defaultProfileIcon from "../assets/images/profile-icon-default.png";

function NavBar() {
    const [activeLink, setActiveLink] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();

    const options = [
        { value: "1", label: "My Stats", path: "/mystats" },
        { value: "2", label: "Home", path: "/leaderboard" },
        { value: "3", label: "About", path: "/about" },
    ];

    useEffect(() => {
        const pathMap = {
            "/mystats": 0,
            "/leaderboard": 1,
            "/about": 2,
        };

        // Set active link based on path
        setActiveLink(pathMap[location.pathname] ?? -1);

    }, [location.pathname]);

    return (
        <header className="main-container">
            <div className="logo">
                <AnimatedText
                    size="50px"
                    glitchInterval={200}
                    probability={0.9}
                    glow
                >
                    GameDev
                </AnimatedText>
            </div>

            <NoiseButton options={options} />


        </header>
    );
}

export default NavBar;
