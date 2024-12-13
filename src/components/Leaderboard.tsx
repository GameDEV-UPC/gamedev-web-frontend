// src/components/UserInfo.tsx

import React from "react";
import UserCard from "./UserCard";
import '../styles/components/LeaderBoard.css';
import User from "../interfaces/User";



const Leaderboard = ({ users }: { users: User[] }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {users.map((user, index) => (
          <li key={index} className="leaderboard-card">
            {/* Render UserCard for each user */}
            <UserCard
              username={user.username}
              score={user.score}
              profilePicture={user.profilePicture}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
