import React from "react";
import UserInfo from "../components/UserInfo";

function Home() {
  const users = [
    { name: "User1", score: 250 },
    { name: "User2", score: 200 },
    { name: "User3", score: 180 },
    { name: "User4", score: 150 },
    { name: "User5", score: 1200 },
  ];

  return (
    <div>
      <h1>GameDev Leaderboard</h1>
      <UserInfo users={users} />
    </div>
  );
}

export default Home;
