import { useState } from "react";
import "../styles/components/Button.css";

interface ButtonProps {
    children: string;
    onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    const [animatedText, setAnimatedText] = useState(children);
    const [isAnimating, setIsAnimating] = useState(false);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const animateText = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        const originalText = children.split("");
        const animationFrames = 15;
        const interval = 30;

        let frame = 0;

        const intervalId = setInterval(() => {
            setAnimatedText(
                originalText
                    .map((char, idx) => (frame < animationFrames ? chars.charAt(Math.random() * chars.length) : char))
                    .join("")
            );

            if (++frame > animationFrames) {
                clearInterval(intervalId);
                setIsAnimating(false);
                setAnimatedText(children);
            }
        }, interval);
    };

    const handleClick = () => {
        onClick?.();
        animateText();
    };

    return (
        <button
            className="animated-button"
            onClick={handleClick}
            onMouseEnter={animateText}
        >
            <span>{animatedText}</span>
        </button>
    );
}
export default Button;