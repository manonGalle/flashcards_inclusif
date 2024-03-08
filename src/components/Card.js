import React, { useState } from 'react';
import './Card.css';

function Card( {frontImage, backImage} ) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
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

    </>
  );
}

export default Card;