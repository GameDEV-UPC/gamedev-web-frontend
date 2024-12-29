import React from 'react';
import GameCard from '../components/GameCard'; // Asegúrate de que la ruta sea correcta
import '../styles/pages/Home.css'; // Archivo CSS para estilos del Home

function Home() {
  const games = [
    { gameName: 'Game A', playTime: 10, score: 90 },
    { gameName: 'Game B', playTime: 8, score: 90 },
    { gameName: 'Game C', playTime: 15, score: 85 },
    { gameName: 'Game D', playTime: 5, score: 95 },
  ];

  // Ordenar los juegos por puntuación descendente y tiempo ascendente en caso de empate
  const sortedGames = games.sort((a, b) => {
    if (b.score === a.score) {
      return a.playTime - b.playTime; // Menos tiempo de juego primero
    }
    return b.score - a.score; // Mayor puntuación primero
  });

  return (
      <div className="home-container">
        <h1 className="home-title">Game Rankings</h1>
        <div className="game-cards-container">
          {sortedGames.map((game, index) => (
              <GameCard
                  key={index}
                  gameName={game.gameName}
                  playTime={game.playTime}
                  score={game.score}
              />
          ))}
        </div>
      </div>
  );
}

export default Home;
