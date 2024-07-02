import React from 'react';
import './TeamList.css';

const TeamList = ({ team }) => {
  return (
    <div className="team-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>Email Id</th>
            <th>Dept</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.mobile}</td>
              <td>{member.email}</td>
              <td>{member.department}</td>
              <td>{member.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
