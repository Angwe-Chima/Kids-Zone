import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Review2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  let intervalId; // Variable to store setInterval ID

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
    intervalId = setInterval(next, 4000); // Update slide every 3 seconds

    return () => {
      nextButton.removeEventListener("click", next);
      previousButton.removeEventListener("click", previous);
      clearInterval(intervalId); // Clear interval when component unmounts
    };
  }, [currentSlide]); // Re-run effect only when currentSlide changes

  return (
    <div className="main-container">
      <h1>What The Kids Are Saying</h1>
      <div className="carousel-container">
        <button className="prev_btn btn" onClick={() => setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)}><MdKeyboardArrowLeft /></button>
        {[
          { name: 'Lily', message: 'I love the fun games! They make me laugh and teach me new things' },
          { name: 'Max', message: 'The songs are my favorite! I dance and sing along all day' },
          { name: 'Ben', message: 'Coloring is so much fun! I make beautiful pictures!' },
          { name: 'Yhan', message: 'I love the stories! Mommy reads them to me, and I learn new words!' },
        ].map(({ name, message }, index) => (
          <div className="img" key={index} style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
            <div className="card">
              <h3>{name}</h3>
              <p>{message}</p>
            </div>
          </div>
        ))}
        <button className="next_btn btn" onClick={() => setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)}><MdKeyboardArrowRight /></button>
      </div>
    </div>
  );
};

export default Review2;
