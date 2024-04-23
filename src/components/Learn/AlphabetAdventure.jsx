import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import alphabetData from '../Data/alphabetData';
import SkeletonLoading from "../SkelotonLoading";

function Learn() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="alphabets-adventure activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Alphabet Adventure</h1>
      </div>
      <div className="alphabets">
        {loading ? (
          Array.from({ length: alphabetData.length }).map((_, idx) => (
            <SkeletonLoading key={idx} />
          ))
        ) : (
          alphabetData.map((alphabet, index) => (
            <div
              key={index}
              className={`letters loaded ${
                alphabet.imageLoaded ? '' : 'loading'
              }`}
              style={{ "--alphabetImage": `url(${alphabet.image})` }}
            >
              <span>
                <audio controls>
                  <source src={alphabet.audiosrc} type="audio/mp3" />
                </audio>
              </span>

              <p>
                <strong>{alphabet.name}</strong> for {alphabet.word}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Learn;
