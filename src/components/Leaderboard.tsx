import React from "react";
import "../styles/components/Leaderboard.css";
import { User } from "../utils/User";

interface LeaderboardProps {
    users: User[];
}

function Leaderboard({ users }: LeaderboardProps) {
    // Sort users by total score
    const sortUsers = (users: User[]) => {
        return users.sort((a, b) => b.totalScore() - a.totalScore());
    };

    const sortedUsers = sortUsers(users);

    return (
        <div className="leaderboard-container">
            <h2 className="leaderboard-title">Leaderboard</h2>
            <div className="leaderboard">
                {sortedUsers.map((user, index) => (
                    <div className="leaderboard-item" key={index}>
                        <img
                            src={user.profilePicture}
                            alt={`${user.firstName} ${user.lastName}`}
                            className="profile-pic"
                        />
                        <div className="user-info">
                            <h3>{`${user.firstName} ${user.lastName}`}</h3>
                            <p>Total Score: {user.totalScore()}</p>
                            <p>Total Play Time: {user.totalPlayTime()} minutes</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
