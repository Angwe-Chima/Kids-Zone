import { useEffect, useState } from "react";
import { LuArrowUpFromLine } from "react-icons/lu";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); 
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="totop-div">
      {showButton && ( 
        <div className="toTop" onClick={scrollUp}>
          <LuArrowUpFromLine className="upIcon" />
          <span>Goto Top</span>
        </div>
      )}
    </div>
  );
}

export default BackToTopButton;
