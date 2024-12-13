import React, { useEffect, useState } from "react";
import Leaderboard from "../components/Leaderboard";
import User from "../interfaces/User";
function Home() {
  // Definir el estado para los usuarios, carga y error
  const [users, setUsers] = useState([]); // Estado para los usuarios
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // useEffect para llamar a la API y obtener los usuarios
  useEffect(() => {
    // Función asincrónica para obtener los usuarios desde la API
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://192.168.0.19:8000/users'); // Llamada a la API

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Asegurarnos de que la respuesta contiene los datos esperados
        const formattedUsers = data.map((user:User) => ({
          name: user.name,
          score: user.score,
          profilePicture: user.profile_pic,
          email: user.email,
            username: user.username,
        }));

        // Actualizar el estado con los usuarios obtenidos
        setUsers(formattedUsers);
      } catch (error) {
        setError(error.message); // Capturar el error y establecer el mensaje
      } finally {
        setLoading(false); // Dejar de mostrar el estado de carga
      }
    };

    fetchUsers();
  }, []); // El array vacío asegura que solo se llame una vez al cargar la página

  // Renderizar según el estado de carga o error
  if (loading) {
    return <p>⏳ Cargando usuarios...</p>; // Mensaje de carga
  }

  if (error) {
    return <p>❌ Error: {error}</p>; // Mensaje de error si ocurre algo
  }

  // Renderizar la lista de usuarios cuando la carga termine y no haya errores
  return (
      <div>
        <Leaderboard users={users} /> {/* Pasar los usuarios a la componente Leaderboard */}
      </div>
  );
}

export default Home;
