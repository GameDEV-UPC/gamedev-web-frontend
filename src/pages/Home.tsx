import React from 'react';
import '../styles/pages/Home.css'; // Archivo CSS para estilos del Home
import Leaderboard from "../components/Leaderboard";
import { User } from "../utils/User";

function Home() {
    // Crear instancias de User para garantizar el uso de métodos de la clase
    const users = [
        new User(
            "jhondoe",
            "John",
            "Doe",
            "johndoe@example.com",
            "https://via.placeholder.com/150",
            [
                { gameName: "Chess", maxScore: 1200, timePlayed: 150 },
                { gameName: "Sudoku", maxScore: 980, timePlayed: 105 },
                { gameName: "Tetris", maxScore: 1500, timePlayed: 190 },
            ]
        ),
        new User(
            "janesmith",
            "Jane",
            "Smith",
            "janesmith@example.com",
            "https://via.placeholder.com/150",
            [
                { gameName: "Chess", maxScore: 1400, timePlayed: 200 },
                { gameName: "Sudoku", maxScore: 1100, timePlayed: 80 },
                { gameName: "Tetris", maxScore: 1300, timePlayed: 100 },
            ]
        ),
        new User(
            "janesmith",
            "Jane",
            "Smith",
            "janesmith@example.com",
            "https://via.placeholder.com/150",
            [
                { gameName: "Chess", maxScore: 1400, timePlayed: 200 },
                { gameName: "Sudoku", maxScore: 1100, timePlayed: 80 },
                { gameName: "Tetris", maxScore: 1300, timePlayed: 100 },
            ]
        ),
        new User(
            "janesmith",
            "Jane",
            "Smith",
            "janesmith@example.com",
            "https://via.placeholder.com/150",
            [
                { gameName: "Chess", maxScore: 1400, timePlayed: 200 },
                { gameName: "Sudoku", maxScore: 1100, timePlayed: 80 },
                { gameName: "Tetris", maxScore: 1300, timePlayed: 100 },
            ]
        ),
        new User(
            "janesmith",
            "Jane",
            "Smith",
            "janesmith@example.com",
            "https://via.placeholder.com/150",
            [
                { gameName: "Chess", maxScore: 1400, timePlayed: 200 },
                { gameName: "Sudoku", maxScore: 1100, timePlayed: 80 },
                { gameName: "Tetris", maxScore: 1300, timePlayed: 100 },
            ]
        ),
    ];

    return (
        <div className="home-container">
            <Leaderboard users={users} />
        </div>
    );
}

export default Home;
