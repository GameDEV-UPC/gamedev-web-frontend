// src/components/UserInfo.tsx

import React from "react";
import UserCard from "./UserCard";

type User = {
  name: string;
  score: number;
  profilePicture: string; // Assuming you want to pass the profile picture URL
};

const UserInfo = ({ users }: { users: User[] }) => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {users.map((user, index) => (
          <li key={index} className="leaderboard-card">
            {/* Render UserCard for each user */}
            <UserCard
              username={user.name}
              score={user.score}
              profilePicture={user.profilePicture}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserInfo;
