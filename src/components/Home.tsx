import React, { useState, useEffect } from "react";

const Home = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Welcome to the Homepage</h2>
      <p>Current Date and Time:</p>
      <p>{currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Home;
