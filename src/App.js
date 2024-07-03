import React from 'react';
import Slider from 'react-slick';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const teamInPlant = [
  {
    name: "AMIT KUMAR BARUA",
    dept: "H Blast Furnace",
    bloodGroup: "B+",
  },
  {
    name: "SANJAY KUMAR PRASAD",
    dept: "H Blast Furnace",
    bloodGroup: "B+",
    phone: "7979895528",
  },
  {
    name: "SANJIB KUMAR SINGH",
    dept: "Iron Making Mechanical Maintenance",
    bloodGroup: "B-",
  }
];

const teamNotInPlant = [
  {
    name: "Ramesh Hansdah",
    dept: "Office of VP Safety, Health & Sustainability",
    bloodGroup: "A+",
    phone: "9262290749",
    email: "RAMESH.HANSDAH@TATASTEEL.COM"
  },
  {
    name: "SUSHIL KUMAR",
    dept: "Iron Making Mechanical Maintenance",
    bloodGroup: "A+",
    email: "SUSHIL.K@TATASTEEL.COM"
  },
  {
    name: "LAKHI TUDU",
    dept: "H Blast Furnace",
    bloodGroup: "A+",
    email: "LAKHI.TUDU@TATASTEEL.COM"
  },
  {
    name: "DEBASHISH BARIK",
    dept: "H Blast Furnace",
    bloodGroup: "B+",
    email: "DEBASHISHBARIK@TATASTEEL.COM"
  },
  {
    name: "RAVINDER PANDEY",
    dept: "H Blast Furnace",
    bloodGroup: "O+",
    email: "RAVINDER.PANDEY@TATASTEEL.COM"
  },
  {
    name: "RAJANARAYAN SAHOO",
    dept: "H Blast Furnace",
    bloodGroup: "AB-",
    phone: "7978452543",
    email: "RAJ.SAHOO@TATASTEEL.COM"
  }
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Emergency Response Team @ HBF</h1>
      </header>
      <Slider {...settings}>
        {teamInPlant.map((member, index) => (
          <div className="team-card" key={index}>
            <h2>{member.name}</h2>
            <p>{member.dept}</p>
            <p>Blood Group: {member.bloodGroup}</p>
            <p>Phone: {member.phone ? member.phone : "N/A"}</p>
            <p>Email: {member.email ? member.email : "N/A"}</p>
          </div>
        ))}
      </Slider>
      <header className="App-header">
        <h1>Emergency Response Team not in plant @ HBF</h1>
      </header>
      <div className="team-container">
        {teamNotInPlant.map((member, index) => (
          <div className="team-card" key={index}>
            <h2>{member.name}</h2>
            <p>{member.dept}</p>
            <p>Blood Group: {member.bloodGroup}</p>
            <p>Phone: {member.phone ? member.phone : "N/A"}</p>
            <p>Email: {member.email ? member.email : "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
