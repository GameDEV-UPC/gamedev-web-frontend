import React from "react";
import "../styles/components/GameCard.css"; // Importar el CSS de la GameCard

interface GameCardProps {
    gameName: string;
    playTime: string;
    score: number;
}

const GameCard: React.FC<GameCardProps> = ({ gameName, playTime, score }) => {
    return (
        <div className="game-card">
            <h3 className="game-name">{gameName}</h3>
            <p className="game-playtime">Played Time: {playTime}</p>
            <p className="game-score">Score: {score}</p>
        </div>
    );
};

export default GameCard;
