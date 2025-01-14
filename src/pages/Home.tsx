import React, { useState, useEffect } from "react";
import "../styles/pages/Home.css"; // Archivo CSS para estilos del Home
import Leaderboard from "../components/Leaderboard";
import User from "../interfaces/User"; // Importar la interfaz para referencia tipada (opcional)

function Home() {
    // Estado para almacenar usuarios
    const [users, setUsers] = useState<User[]>([]);

    // Función para obtener usuarios desde la API
    const fetchUsers = async () => {
        try {
            const response = await fetch("http://0.0.0.0:8000/users"); // Cambia a la URL real de tu API
            if (!response.ok) throw new Error(`Error: ${response.status}`);

            const data = await response.json();
            // Mapear datos de la API a la estructura de User
            const mappedUsers = data.map((item: any) => ({
                username: item.username,
                score: item.score,
                profile_pic: item.profile_pic,
            }));
            setUsers(mappedUsers);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    };

    // Llamar a la API cuando se cargue el componente
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="home-container">
            <Leaderboard users={users} />
        </div>
    );
}

export default Home;
