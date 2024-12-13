import React, { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import MemberCard from "../components/MemberCard.tsx";
import User from "../interfaces/User.tsx";

interface Member {
    name: string;
    image_path: string;
    description: string;
}
function About() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const  fetchMembers = async () => {
            try {
                const response = await fetch('http://192.168.0.19:8000/users');
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();

                const formattedMembers = data.map((member: User) => ({
                    name: member.name,
                    score: member.score,
                    profile_pic: member.profile_pic,
                    email: member.email,
                    username: member.username,
                }));
                setMembers(formattedMembers);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchMembers();

    }, []);
    if (loading) {
        return <p>⏳ Loading...</p>; // Mensaje de carga
    }

    if (error) {
        return <p>❌ Error: {error}</p>; // Mensaje de error si ocurre algo
    }
    return (
        <div style={{ padding: '10px' }}>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 500: 2, 700: 3, 900: 4 }}
            >
                <Masonry gutter="20px">
                    {members.map((member: User) => (
                        <MemberCard
                            key={member.username}
                            name={member.name}
                            username={member.username}
                            profile_pic={member.profile_pic}
                            email={member.email}
                            score={member.score}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>

        </div>
    );
}

export default About;