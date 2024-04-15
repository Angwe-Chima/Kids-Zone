import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import animalData from "../Data/animalData";

function AnimalAdventure() {
  return (
    <div className="animal-adventure activity">
      <div className="top">
        <Link to="/learn"><IoMdArrowRoundBack /></Link>
        <h1>Animal Adventure</h1>
      </div>
      <div className="animals">
        {
          animalData.map((animal, idx)=>{
            return (
              <div key={idx} style={{'--animalImage': `url(${animal.image})`}}>
                <span>
                 {animal.sound && <audio controls>
                    <source src={animal.sound} type="audio/mp3"/>
                  </audio>  }    
                </span>
                <p>{animal.name}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AnimalAdventure