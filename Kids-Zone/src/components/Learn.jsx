import { Link } from "react-router-dom";
import "../style/learn.css";
import "../style/color-world.css";
import "../style/animal-adventure.css";
import "../style/rhythmic-rhymes.css";
import "../style/fruits-and-vegetable.css"
import "../style/maths-and-quiz.css";
import "../style/numbers.css";
import "../style/alphabet-adventure.css";
import LearnElements from "./Data/LearnElements";

function Learn() {
  return (
    <div className="learn">
      <h1>Your Learning Environment</h1>
      <div className="learn-cards">
        {LearnElements.map((element, idx) => (
          <Link to={`/Learn/${element.urlTitle}`} key={idx}>
            <div
              className="learn-card"
              key={element.id}
              title={element.title}
              style={{ "--bg-image": `url(${element.url})` }}
            >
              <h2>{element.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Learn;
