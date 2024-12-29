import React from 'react';
import '../styles/components/GameCard.css';

interface GameCardProps {
    gameName: string;
    playTime: number;
    score: number;
}

function GameCard(props: GameCardProps) {
    return (
        <div className="game-card">
            <h3 className="game-name">{props.gameName}</h3>
            <p className="game-playtime">Played Time: {props.playTime}h</p>
            <p className="game-score">Score: {props.score}</p>
        </div>
    );
}

export default GameCard;
