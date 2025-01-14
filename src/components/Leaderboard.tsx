import "../styles/components/Leaderboard.css";
import User from "../interfaces/User";
import colors from "../styles/colors.tsx";
import AnimatedText from "./AnimatedText.tsx";

interface LeaderboardProps {
    users: User[];
}

function Leaderboard({ users }: LeaderboardProps) {
    // Sort users by total score
   

    const sortedUsers = users;

    return (
        <div className="leaderboard-container">
            <AnimatedText
                size="2rem"
                primaryColor={colors.primary}
                glitchColor={colors.glowsecondary}
                glow={true}
                glowColor={colors.glowprimary}
                glitchInterval={100}
                probability={0.97}
            >
                Leaderboard
            </AnimatedText>
            <div className="leaderboard">
                {sortedUsers.map((user, index) => (
                    <div className="leaderboard-item" key={index}>
                        <img
                            src={user.profile_pic}
                            alt={user.username}
                            className="profile-pic"
                        />
                        <div className="user-info">
                            <h3>{user.username}</h3>
                            <p>Total Score: {0}</p>
                            <p>Total Play Time: {0} minutes</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
