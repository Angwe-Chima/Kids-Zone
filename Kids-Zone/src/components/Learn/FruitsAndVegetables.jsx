import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import fruitsAndVegetableData from "../Data/fruitsAndVegetableData";

function FruitsAndVegetables() {
  return (
    <div className="fruit-and-vege activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Fruits And Vegies</h1>
      </div>
      <div className="fruitvegy">
        {fruitsAndVegetableData.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <p>Type: {item.isFruit ? "Fruit" : "Vegetable"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FruitsAndVegetables;
