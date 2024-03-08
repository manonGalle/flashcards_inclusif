import React, { useState } from 'react';
import './App.css';
import frontImage1 from "./assets/images/Situation_1front.png";
import backImage1 from "./assets/images/Situation_1back.png";
import frontImage2 from "./assets/images/Situation_2.png";
import backImage2 from "./assets/images/Situation_2back.png";
import frontImage3 from "./assets/images/Situation_3.png";
import backImage3 from "./assets/images/Situation_3back.png";
import frontImage4 from "./assets/images/Situation_4.png";
import backImage4 from "./assets/images/Situation_4back.png";
import frontImage5 from "./assets/images/Situation_5.png";
import backImage5 from "./assets/images/Situation_5back.png";
import frontImage6 from "./assets/images/Situation_6.png";
import backImage6 from "./assets/images/Situation_6back.png";
import frontImage7 from "./assets/images/Situation_7.png";
import backImage7 from "./assets/images/Situation_7back.png";
import frontImage8 from "./assets/images/Situation_8.png";
import backImage8 from "./assets/images/Situation_8back.png";
import frontImage9 from "./assets/images/Situation_9.png";
import backImage9 from "./assets/images/Situation_9back.png";
import frontImage10 from "./assets/images/Situation_10.png";
import backImage10 from "./assets/images/Situation_10back.png";

import Card from './components/Card';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div className="App">
      <Card frontImage={frontImage1} backImage={backImage1}/>
      <Card frontImage={frontImage2} backImage={backImage2}/>
      <Card frontImage={frontImage3} backImage={backImage3}/>
      <Card frontImage={frontImage4} backImage={backImage4}/>
      <Card frontImage={frontImage5} backImage={backImage5}/>
      <Card frontImage={frontImage6} backImage={backImage6}/>
      <Card frontImage={frontImage7} backImage={backImage7}/>
      <Card frontImage={frontImage8} backImage={backImage8}/>
      <Card frontImage={frontImage9} backImage={backImage9}/>
      <Card frontImage={frontImage10} backImage={backImage10}/>
      
    </div>



  );
}

export default App;
