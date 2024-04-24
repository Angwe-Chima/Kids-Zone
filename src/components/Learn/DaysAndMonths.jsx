import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function DaysAndMonths() {
  return (
    <div className="days-and-month activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Days And Month</h1>
      </div>
      <div className="week">
        <h2>Days Of The Week</h2>
        <div>
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
      </div>
      <div className="day-month">
        <h2>Month Of The Year</h2>
        <div>
        <div>
          <p>Juanuary</p>
        </div>
        <div>
          <p>Febuary</p>
        </div>
        <div>
          <p>March</p>
        </div>
        <div>
          <p>April</p>
        </div>
        <div>
          <p>May</p>
        </div>
        <div>
          <p>June</p>
        </div>
        <div>
          <p>July</p>
        </div>
        <div>
          <p>August</p>
        </div>
        <div>
          <p>September</p>
        </div>
        <div>
          <p>October</p>
        </div>
        <div>
          <p>November</p>
        </div>
        <div>
          <p>December</p>
        </div>

        </div>
      </div>
    </div>
  );
}

export default DaysAndMonths;
