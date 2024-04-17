import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import alphabetData from "../Data/alphabetData";

function Learn() {
  return (
    <div className="alphabets-adventure activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Alphabet Adventure</h1>
      </div>
      <div className="alphabets">
        {alphabetData.map((alphabet, index) => (
          <div
            key={index}
            className={`letters loaded ${
              // Conditionally add 'loading' class while image loads
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
              <strong>{alphabet.name}</strong>for {alphabet.word}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learn;
