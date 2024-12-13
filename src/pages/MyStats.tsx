import React, { useEffect, useState } from "react";
import "../styles/pages/MyStats.css"; // Importar el CSS
import GameCard from "../components/GameCard"; // Componente de cada tarjeta de juego

// Simulación de la data del usuario (puedes usar datos reales con una API)
const mockUserData = {
    photoUrl: "https://via.placeholder.com/150",
    username: "Player123",
    fullName: "John Doe",
    email: "johndoe@example.com",
};

const mockGameHistory = [
    { id: 1, gameName: "Chess", playTime: "2h 30m", score: 1200 },
    { id: 2, gameName: "Sudoku", playTime: "1h 45m", score: 980 },
    { id: 3, gameName: "Tetris", playTime: "3h 10m", score: 1500 },

];

const MyStats = () => {
    const [userData, setUserData] = useState(mockUserData); // Información del usuario
    const [gameHistory, setGameHistory] = useState(mockGameHistory); // Historial de partidas

    // Simula la carga de datos (puedes cambiarlo por una llamada a la API)
    useEffect(() => {
        // Simular la carga de datos del usuario
        setTimeout(() => {
            setUserData(mockUserData);
            setGameHistory(mockGameHistory);
        }, 1000); // Simula un retraso de 1 segundo
    }, []);

    return (
        <div className="my-stats-page">
            {/* Sección de perfil del usuario */}
            <section className="user-profile">
                <img src={userData.photoUrl} alt="Foto del jugador" className="user-photo" />
                <h1 className="username">{userData.username}</h1>
                <p className="full-name">{userData.fullName}</p>
                <p className="email">{userData.email}</p>
            </section>

            {/* Sección de GameCards */}
            <section className="game-history">
                <h2 className="game-history-title">Historial de Juegos</h2>
                <div className="game-cards-container">
                    {gameHistory.map((game) => (
                        <GameCard
                            key={game.id}
                            gameName={game.gameName}
                            playTime={game.playTime}
                            score={game.score}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MyStats;
