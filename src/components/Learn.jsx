import { Link } from "react-router-dom";
import "../style/learn.css";
import LearnElements from "./Data/LearnElements";
import { useEffect, useState } from "react";

// Dynamically import only when needed
const cssFiles = {
  colorWorld: () => import("../style/color-world.css"),
  animalAdventure: () => import("../style/animal-adventure.css"),
  rhythmicRhymes: () => import("../style/rhythmic-rhymes.css"),
  fruitsAndVegetable: () => import("../style/fruits-and-vegetable.css"),
  mathsAndQuiz: () => import("../style/maths-and-quiz.css"),
  numbers: () => import("../style/numbers.css"),
  alphabetAdventure: () => import("../style/alphabet-adventure.css"),
  daysAndMonth: () => import("../style/days-and-month.css"),
};

function Learn() {
  const [loadedStyles, setLoadedStyles] = useState(new Set());

  // Lazy load CSS files only when Learn page loads
  useEffect(() => {
    Object.values(cssFiles).forEach((importCss) => {
      importCss().catch((err) => console.warn("CSS import failed:", err));
    });
  }, []);

  return (
    <div className="learn">
      <h1>Your Learning Environment</h1>
      <div className="learn-cards">
        {LearnElements.map((element, idx) => (
          <Link to={`/Learn/${element.urlTitle}`} key={idx}>
            <div
              className="learn-card"
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