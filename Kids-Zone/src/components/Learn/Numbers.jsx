import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import numbersData from "../Data/numbersData";

export default function Numbers() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(
      <div key={i} className="number">
        <p>{i}</p>
        <span className="spelling">{numbersData[i]}</span>
      </div>
    );
  }

  return (
    <div className="numbers activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Numbers</h1>
      </div>
      <div className="nums">{numbers}</div>
    </div>
  );
}
