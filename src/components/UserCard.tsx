// src/components/UserCard.tsx
import React from 'react';
import '../styles/components/UserCard.css';

// Define the props type for UserCard
type User = {
  username: string;
  score: number;
  profilePicture: string;
};

function UserCard({ username, score, profilePicture }: User) {
  return (
    <div className="user-card">
      {/* Display user profile picture */}
      <img 
        src={profilePicture} 
        alt={`${username}'s profile`} 
        className="user-card__img" 
      />
      <div className="user-card__info">
        {/* Display username */}
        <h3 className="user-card__username">{username}</h3>
        {/* Display score */}
        <p className="user-card__score">Score: {score}</p>
      </div>
    </div>
  );
}

export default UserCard;
