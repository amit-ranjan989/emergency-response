import React from 'react';
import './App.css';
import TeamMember from './components/TeamMember';
import TeamList from './components/TeamList';

function App() {
  const emergencyTeam = [
    {
      name: "Amit Kumar Barua",
      department: "H Blast Furnace",
      bloodGroup: "B+",
      imageUrl: "/images/amit.jpg",
    },
    {
      name: "Sanjay Kumar Prasad",
      department: "H Blast Furnace",
      bloodGroup: "B+",
      imageUrl: "/images/sanjay.jpg",
    },
    {
      name: "Sanjib Kumar S",
      department: "Iron Making Mechanical",
      bloodGroup: "B-",
      imageUrl: "/images/sanjib.jpg",
    },
  ];

  const notInPlantTeam = [
    {
      name: "Ramesh Hansdah",
      mobile: "9262290749",
      email: "RAMESH.HANSDAH@TATASTEEL.COM",
      department: "Office of VP Safety, Health & Sustainability",
      bloodGroup: "A+",
    },
    {
      name: "Sushil Kumar",
      mobile: "",
      email: "SUSHIL.K@TATASTEEL.COM",
      department: "Iron Making Mechanical Maintenance",
      bloodGroup: "A+",
    },
    {
      name: "Lakhi Tudu",
      mobile: "",
      email: "LAKHI.TUDU@TATASTEEL.COM",
      department: "H Blast Furnace",
      bloodGroup: "A+",
    },
    {
      name: "Debashish Barik",
      mobile: "",
      email: "DEBASHISHBARIK@TATASTEEL.COM",
      department: "H Blast Furnace",
      bloodGroup: "B+",
    },
    {
      name: "Ravinder Pandey",
      mobile: "",
      email: "RAVINDER.PANDEY@TATASTEEL.COM",
      department: "H Blast Furnace",
      bloodGroup: "O+",
    },
    {
      name: "Rajanarayan Sahoo",
      mobile: "7978452543",
      email: "RAJ.SAHOO@TATASTEEL.COM",
      department: "H Blast Furnace",
      bloodGroup: "AB-",
    },
  ];

  return (
    <div className="App">
      <header>
        <h1>Emergency Response Team @ HBF</h1>
      </header>
      <div className="image-section">
        {emergencyTeam.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
      <div className="bottom-bar">
        <h2>Emergency Response Team not in plant @ HBF</h2>
        <TeamList team={notInPlantTeam} />
      </div>
    </div>
  );
}

export default App;
