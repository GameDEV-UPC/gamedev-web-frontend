import React from 'react';
import User from '../interfaces/User';
import '../styles/components/MemberCard.css';
function MemberCard(member:User) {

    return (
        <div className="member-card">
            <img
                src={member.profile_pic}
                alt={member.username}
                className="member-card-img"
            />
            <div className="member-card-content">
                <h3 className="member-card-title">{member.username}</h3>
                <p className="member-card-description">{member.email}</p>
            </div>
        </div>
    );
}

export default MemberCard;