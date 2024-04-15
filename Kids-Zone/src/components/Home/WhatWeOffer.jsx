import { Link } from "react-router-dom";

const WhatWeOffer = () => {
  const numbers = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/123.png?alt=media&token=c3f0ed5e-a62f-47c7-a0b0-1b2a7368361e';
  const abc = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/abc.png?alt=media&token=3c4e26c8-8689-4132-b170-97ca08adf70e';
  const color = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/color.png?alt=media&token=e9bdcfcc-84fc-4c1e-a1b0-4150bca72e43';
  const animals = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/animals.png?alt=media&token=e2e50928-75f7-4dac-b953-febb6012b82e';
  const rhyme = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/rhymes.png?alt=media&token=e5e2dabc-26e5-45e5-accc-8529e3aadf97';
  const dayMonth = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/day-month.png?alt=media&token=99eccb6a-0104-4731-bb0e-bcacdeceb128';
  const vegetable = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/vegetable.png?alt=media&token=80cd6b3d-94de-4de2-9b50-cf5393701abb';
  const quiz = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/quiz.png?alt=media&token=68b30dac-c432-4079-b0ca-d86fba7882a5';
  const happyToddlers = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers.png?alt=media&token=7b76b59d-dec6-40ed-a4c4-79e862d7e421';
  const happyToddlers2 = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-2.png?alt=media&token=d42cfffb-58b3-4531-9b08-f0458a7d1abd';
  const happyToddlers3 = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-3.png?alt=media&token=dca8373c-feed-4867-ae2d-e4f5bc34a870';
  const happyToddlers4 = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-4.png?alt=media&token=d243c154-bd73-42bd-a869-2b3f94287c58';


  return (
    <div className="what-we-offer">
      <div>
        <h1>Activities We Offer</h1>
      </div>

      <div className="offers">
        <div className="sec rightSec">
          <div className="sec-card">
            <Link to="/learn/numbers">
              <img src={numbers} alt="" />
              <div className="sec-text-desc">  
                <h3>Fun With Numbers</h3>
                <p>Explore the world of numbers through exciting games and puzzles! Dive into counting adventures and basic math, making learning both fun and impactful</p>
              </div>
            </Link>
          </div>
          <div className="sec-card">
            <Link to="/learn/Alphabet-Adventure">
              <img src={abc} alt="" />
              <div className="sec-text-desc">  
                <h3>Alphabet Adventures</h3>
                <p>Journey through the alphabet in interactive sessions. Discover letters and sounds with stories, songs, and games, laying the foundation for reading and writing</p>
              </div>
            </Link>
          </div>
          <div className="sec-card">
            <Link to="/learn/Rhymes-And-Sounds">
              <img src={rhyme} alt="" />
              <div className="sec-text-desc">  
                <h3>Rhythmic Rhymes</h3>
                <p>Bounce to the beat of catchy rhymes and songs. Cultivate a love for music and rhythm, enhancing memory and language skills through melody and verse</p>
              </div>
            </Link>
          </div>
          <div className="sec-card">
            <Link to="/learn/Fruits-And-Vegetables">
              <img src={vegetable} alt="" />
              <div className="sec-text-desc">  
                <h3>Fruity and Vegies </h3>
                <p>Explore the world of fruits and vegetables, discovering their benefits and delicious ways to enjoy them. A fresh, juicy learning adventure awaits!</p>
              </div>
            </Link>
          </div>
  
        </div>
        <div className="midSec">
          <img src={happyToddlers} alt="" className="images image1"/>
          <div>
            <img src={happyToddlers2} alt="" className="images image2"/>
            <img src={happyToddlers3} alt="" className="images image3"/>
          </div>
          <img src={happyToddlers4} alt="" className="images image4"/>
        </div>
        <div className="sec leftSec">
          <div className="sec-card">
            <Link to="/learn/Color-World">
              <img src={color} alt="" />
              <div className="sec-text-desc">  
                <h3>Colorful Creations</h3>
                <p>Unleash creativity in a splash of colors. Engage in art projects and activities that encourage expression and recognize the beauty in our diverse world</p>
              </div>
            </Link>
          </div>
          <div className="sec-card">
          <Link to="/learn/Animal-Adventure">
            <img src={animals} alt="" />
            <div className="sec-text-desc">  
              <h3>Animal Adventures</h3>
              <p>Dive into captivating activities designed to entertain and educate, stimulating critical thinking and clever strategies. Experience a mix of modern technology and classic fun that ignites curiosity and knowledge</p>
            </div>
          </Link>
          </div>
          <div className="sec-card">
          <Link to="/learn/Maths-And-Quiz">
            <img src={quiz} alt="" />
            <div className="sec-text-desc">  
              <h3>Maths and Quiz</h3>
              <p>Sharpen your math skills with interactive quizzes and challenges, from basic to complex. Stay entertained and track your progress with engaging content</p>
            </div>
          </Link>
          </div>
          <div className="sec-card">
          <Link to="/learn/Days-And-Months">
            <img src={dayMonth} alt="" />
            <div className="sec-text-desc">  
              <h3>Calendar Club</h3>
              <p>Explore the concepts of time through days, weeks, and months with interactive lessons. Understand the seasons, learn about holidays, and celebrate the passage of time</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeOffer