import React from "react";

const About = () => {
  const name = "Jarl";
  const interests = ["Coding", "Formula 1", "Video games", "Sports", "Hiking", "Adventuring"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>About Me</h2>
      <p>Name: {name}</p>
      <h3>My Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
