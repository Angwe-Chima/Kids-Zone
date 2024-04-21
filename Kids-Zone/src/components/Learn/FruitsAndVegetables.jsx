import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import fruitsAndVegetableData from '../Data/fruitsAndVegetableData';
import SkeletonLoading from "../SkelotonLoading";

function FruitsAndVegetables() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fruit-and-vege activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Fruits And Vegies</h1>
      </div>
      <div className="fruitvegy">
        {loading ? (
          // Show loading animation for each item in fruitsAndVegetableData
          fruitsAndVegetableData.map((_, index) => (
            <SkeletonLoading key={index} />
          ))
        ) : (
          // Render fruits and vegetables data if loading is false
          fruitsAndVegetableData.map((item, index) => (
            <div key={index}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} />
              <p>Type: {item.isFruit ? 'Fruit' : 'Vegetable'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FruitsAndVegetables;
