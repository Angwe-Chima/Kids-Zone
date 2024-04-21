import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import animalData from "../Data/animalData";
import SkeletonLoading from "../SkelotonLoading";

function AnimalAdventure() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animal-adventure activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Animal Adventure</h1>
      </div>
      <div className="animals">
        {loading ? (
          // Show loading animation for each animal box
          Array.from({ length: animalData.length }).map((_, idx) => (
            <SkeletonLoading key={idx} />
          ))
        ) : (
          // Render animal data if loading is false
          animalData.map((animal, idx) => (
            <div key={idx} style={{ "--animalImage": `url(${animal.image})` }}>
              <span>
                {animal.sound && (
                  <audio controls>
                    <source src={animal.sound} type="audio/mp3" />
                  </audio>
                )}
              </span>
              <p>{animal.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AnimalAdventure;
