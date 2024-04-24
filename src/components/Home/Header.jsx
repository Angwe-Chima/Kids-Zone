import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Link } from "react-router-dom";

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let intervalId;

  useEffect(() => {
    const images = document.querySelectorAll(".img");
    const maxImageIndex = images.length - 1;

    images.forEach((image, index) => {
      image.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });

    function next() {
      const nextSlide = currentSlide === maxImageIndex ? 0 : currentSlide + 1;
      setCurrentSlide(nextSlide);
    }

    function previous() {
      const previousSlide =
        currentSlide === 0 ? maxImageIndex : currentSlide - 1;
      setCurrentSlide(previousSlide);
    }

    const nextButton = document.querySelector(".next_btn");
    const previousButton = document.querySelector(".prev_btn");

    nextButton.addEventListener("click", next);
    previousButton.addEventListener("click", previous);

    // Start automatic scrolling on component mount
    intervalId = setInterval(next, 5000);

    return () => {
      nextButton.removeEventListener("click", next);
      previousButton.removeEventListener("click", previous);
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, [currentSlide]); // Re-run effect only when currentSlide changes

  const activity3 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-3.png?alt=media&token=29690bac-39ec-4b00-8839-11748bbbc884";
  const activity5 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-5.png?alt=media&token=d6c8fbb9-7ab5-480a-b510-c26c3788054c";
  const activity7 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-7.png?alt=media&token=8ff90f50-38b9-4fe3-9353-49d3a7464432";
  const activity6 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-6.png?alt=media&token=05dbcd99-27de-473a-8dbc-a477abd011b6";

  return (
    <div className="header">
      <div className="header-container">
        <main>
          <div className="stage1"></div>
          <div className="stage1"></div>
          <div className="stage1"></div>
          <div className="stage2"></div>
          <div className="stage2"></div>
          <div className="stage2"></div>
          <div className="stage3"></div>
          <div className="stage3"></div>
          <div className="stage3"></div>
          <div className="stage3"></div>
          <div className="stage4"></div>
          <div className="stage4"></div>
          <div className="stage4"></div>
          <div className="stage4"></div>
          <section className="overlay"></section>
        </main>

        <button
          className="prev_btn btn"
          onClick={() =>
            setCurrentSlide(
              currentSlide === 0 ? images.length - 1 : currentSlide - 1
            )
          }
        >
          <MdKeyboardArrowLeft />
        </button>
        {[
          {
            message:
              "Welcome to Kids Zone, where learning is fun and adventure awaits around every corner!",
            image: activity3,
          },
          {
            message:
              "Join us for an educational journey filled with laughter, games, and endless possibilities!",
            image: activity5,
          },
          {
            message:
              "Experience the joy of learning with Kids Zone - where every moment is a chance to discover something new!",
            image: activity6,
          },
          {
            message:
              "At Kids Zone, we believe that learning should be exciting and engaging. Join us and let the adventure begin!",
            image: activity7,
          },
        ].map(({ message, image }, index) => (
          <div
            className="img"
            key={index}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className="card">
              <div className="header-desc">
                <h3>{message}</h3>
                <Link to="/learn">
                  <button className="Btn">Explore Activities</button>
                </Link>
              </div>
              <div className="header-img-div">
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        ))}
        <button
          className="next_btn btn"
          onClick={() =>
            setCurrentSlide(
              currentSlide === images.length - 1 ? 0 : currentSlide + 1
            )
          }
        >
          <MdKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Header;
