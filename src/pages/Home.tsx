import React, { useState } from "react";
import "../styles/pages/Home.css";
import Leaderboard from "../components/Leaderboard";

function Home() {
    // Datos falsos para pruebas
    const fakeUsers = [
        { username: "Alice", score: 1500, profile_pic: "https://via.placeholder.com/50" },
        { username: "Bob", score: 1200, profile_pic: "https://via.placeholder.com/50" },
        { username: "Charlie", score: 1800, profile_pic: "https://via.placeholder.com/50" },
        { username: "Diana", score: 900, profile_pic: "https://via.placeholder.com/50" },
        { username: "Eve", score: 2000, profile_pic: "https://via.placeholder.com/50" },
    ];

    const [users, setUsers] = useState(fakeUsers); // Usamos estado para controlar los usuarios


   // const { users, isLoading, error, refetch } = useFetchUsers("http://0.0.0.0:8000/users");
    return (
        <div className="home-container">


            <Leaderboard users={users} />


        </div>
    );
}

export default Home;
