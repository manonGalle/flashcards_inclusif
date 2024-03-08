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

  const images = [
    { frontImage: frontImage1, backImage: backImage1 },
    { frontImage: frontImage2, backImage: backImage2 },
    { frontImage: frontImage3, backImage: backImage3 },
    { frontImage: frontImage4, backImage: backImage4 },
    { frontImage: frontImage5, backImage: backImage5 },
    { frontImage: frontImage6, backImage: backImage6 },
    { frontImage: frontImage7, backImage: backImage7 },
    { frontImage: frontImage8, backImage: backImage8 },
    { frontImage: frontImage9, backImage: backImage9 },
    { frontImage: frontImage10, backImage: backImage10 }
  ];

  return (

    <div className="App">

      <div className="card-container">
        {images.map((image, index) => (
          <Card key={index} frontImage={image.frontImage} backImage={image.backImage} />
        ))}
      </div>
      
    </div>



  );
}

export default App;
