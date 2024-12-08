import React from "react";

type User = {
  name: string;
  score: number;
};

const UserInfo = ({ users }: { users: User[] }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {users.map((user, index) => (
          <li key={index} className="leaderboard-card">
            {/* Avatar */}
            <div className="leaderboard-avatar">{index + 1}</div>
            {/* Información */}
            <div className="leaderboard-info">
              <h3>{user.name}</h3>
              <p>Rank #{index + 1}</p>
            </div>
            {/* Puntaje */}
            <div className="leaderboard-score">{user.score}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserInfo;
