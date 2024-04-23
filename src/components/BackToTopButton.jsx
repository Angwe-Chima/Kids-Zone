import { IoIosArrowUp } from "react-icons/io";

function BackToTopButton() {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="totop-div" onClick={scrollUp}>
      <section className="toTop" >
        <IoIosArrowUp className="upIcon" />
        <p>Goto Top</p>
      </section>
    </div>
  );
}

export default BackToTopButton;
