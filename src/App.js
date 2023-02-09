import React, { useState, useEffect } from "react";
import './App.css';
import video from './ocean.mp4';

function App() {

  const [tips, setTips] = useState("");

  const newTips = async () => {
  const response = await fetch("http://www.boredapi.com/api/activity/");
  const data = await response.json();
  setTips(data.activity);
  };
  useEffect(() => {
    newTips();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
          </video>
          <h1>Are you bored?</h1>
        <h4>Click the button to find a new tip</h4>
        <p className="par">{tips}</p>
        <button className="btn" onClick={newTips}>New Tip</button>
      </div>
    </div>
  
  );
}
export default App;
