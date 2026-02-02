import React from "react";
import "./App.css";
import bob from './images/bob.jpg'

function App() {
  return (
    <div className="container">
      <h1 className="floating-text">Where is Bob Lucibello?</h1>

      <div className="image-container">
        {/* Replace src with your image */}
        <img
          src={bob}
          alt="Bob Lucibello"
        />
      </div>

      <h2 className="location-text">
       Last spotted at Brandfon Hyundai.. Beware he is dangerous
      </h2>
    </div>
  );
}

export default App;
