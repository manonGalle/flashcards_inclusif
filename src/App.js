import React, { useState } from 'react';
import './App.css';
import frontImage from "./assets/images/front-image.jpg";
import backImage from "./assets/images/back-image.jpg"

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard-container" onClick={handleFlip}>
      <div className={`flashcard ${isFlipped ? 'flipped' : ''}`}>
        { isFlipped ?
            <div className="back">
            <img src={backImage} alt="Back" />
          </div> :
          <div className="front">
          <img src={frontImage} alt="Front" />
        </div>
        }
      </div>
    </div>
  );
}

export default App;
