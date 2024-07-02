import React from 'react';
import './TeamMember.css';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <img src={member.imageUrl} alt={member.name} />
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.department}</p>
        <p>Blood Group: {member.bloodGroup}</p>
      </div>
    </div>
  );
};

export default TeamMember;
