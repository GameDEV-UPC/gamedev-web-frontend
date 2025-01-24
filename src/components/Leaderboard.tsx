import "../styles/pages/Home.css";
import User from "../interfaces/User";
import colors from "../styles/colors.tsx";
import AnimatedText from "./AnimatedText.tsx";

interface LeaderboardProps {
    users: User[];
}

function Leaderboard({ users }: LeaderboardProps) {
    // Ordenar usuarios por puntuación de forma descendente
    const sortedUsers = [...users].sort((a, b) => b.score - a.score);

    return (
        <div className="leaderboard-container">
            <div className={"leaderboard-header"}>
            <AnimatedText

                primaryColor={colors.primary}
                glitchColor={colors.glowsecondary}
                glow={true}

                glitchInterval={100}
                probability={0.97}
            >
                Leaderboard
            </AnimatedText>
            </div>
            <div className="leaderboard">
                {sortedUsers.map((user, index) => (
                    <LeaderboardItem
                        key={user.username}
                        rank={index + 1}
                        username={user.username}
                        profilePic={user.profile_pic}
                        score={user.score}
                        playTime={user.play_time || 0} // Valor por defecto si `play_time` no existe
                    />
                ))}
            </div>
        </div>
    );
}

interface LeaderboardItemProps {
    rank: number;
    username: string;
    profilePic: string;
    score: number;
    playTime: number;
}

function LeaderboardItem({ rank, username, profilePic, score, playTime }: LeaderboardItemProps) {
    return (
        <div className="leaderboard-item">
            <div className="rank">{rank}</div>
            <img
                src={profilePic}
                alt={`Profile picture of ${username}`}
                className="profile-pic"
            />
            <div className="user-info">
                <AnimatedText
                    primaryColor={colors.primary}
                    glitchColor={colors.secondary}
                    glitchInterval={100}
                    probability={0.97}

                >
                    {username}
                </AnimatedText>
                <p>Total Score: {score}</p>
                <p>Total Play Time: {playTime} minutes</p>
            </div>
        </div>
    );
}

export default Leaderboard;
