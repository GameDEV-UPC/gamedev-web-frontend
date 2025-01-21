import React from "react";
import "../styles/pages/MyStats.css";
import { User } from "../utils/User";
import AnimatedText from "../components/AnimatedText.tsx";
import colors from "../styles/colors.tsx";

// Falso Usuario para pruebas
const fakeUser = new User(
    "janedoe",
    "Jane",
    "Doe",
    "janedoe@example.com",
    "https://via.placeholder.com/150",
    [
        { gameName: "Chess", maxScore: 1400, timePlayed: 200 },
        { gameName: "Sudoku", maxScore: 1100, timePlayed: 80 },
        { gameName: "Tetris", maxScore: 1300, timePlayed: 100 },
    ]
);

function MyStats() {
    // Evitamos llamadas repetidas
    const highestScoringGame = fakeUser.highestScoringGame();

    return (
        <div className="stats-container">
            {/* Sección de Perfil */}
            <ProfileSection user={fakeUser} />

            {/* Sección de Estadísticas */}
            <StatisticsSection
                totalPlayTime={fakeUser.totalPlayTime()}
                totalScore={fakeUser.totalScore()}
                highestScoringGame={highestScoringGame}
            />

            {/* Sección de Juegos */}
            <GamesSection games={fakeUser.gamesPlayed} />
        </div>
    );
}

function ProfileSection({ user }: { user: User }) {
    return (
        <div className="profile-section">
            <img
                src={user.profilePicture}
                alt={`Profile of ${user.username}`}
                className="profile-picture"
            />
            <div className="profile-text">
                <AnimatedText
                    size="2rem"
                    primaryColor={colors.primary}
                    glitchColor={colors.glowsecondary}
                    glow={true}
                    glowColor={colors.glowprimary}
                    glitchInterval={100}
                    probability={0.97}
                >
                    {user.username}
                </AnimatedText>
                <p>{`${user.firstName} ${user.lastName}`}</p>
                <p>{user.email}</p>
            </div>
        </div>
    );
}

function StatisticsSection({
                               totalPlayTime,
                               totalScore,
                               highestScoringGame,
                           }: {
    totalPlayTime: number;
    totalScore: number;
    highestScoringGame: { gameName: string; maxScore: number };
}) {
    return (
        <div className="stats-section">
            <AnimatedText
                size="2rem"
                primaryColor={colors.primary}
                glitchColor={colors.glowsecondary}
                glow={true}
                glowColor={colors.glowprimary}
                glitchInterval={100}
                probability={0.97}
            >
                Statistics
            </AnimatedText>
            <div className="stat-item">
                <span>Total Play Time:</span>
                <span>{totalPlayTime} mins</span>
            </div>
            <div className="stat-item">
                <span>Total Score:</span>
                <span>{totalScore}</span>
            </div>
            <div className="stat-item">
                <span>Highest Scoring Game:</span>
                <span>
                    {highestScoringGame.gameName} ({highestScoringGame.maxScore} points)
                </span>
            </div>
        </div>
    );
}

function GamesSection({ games }: { games: { gameName: string; maxScore: number; timePlayed: number }[] }) {
    return (
        <div className="games-section">
            <AnimatedText
                size="2rem"
                primaryColor={colors.primary}
                glitchColor={colors.glowsecondary}
                glow={true}
                glowColor={colors.glowprimary}
                glitchInterval={100}
                probability={0.97}
            >
                Games Played
            </AnimatedText>
            <div className="games-grid">
                {games.map((game, index) => (
                    <div key={index} className="game-card">
                        <h3>{game.gameName}</h3>
                        <p>Max Score: {game.maxScore}</p>
                        <p>Time Played: {game.timePlayed} mins</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyStats;
