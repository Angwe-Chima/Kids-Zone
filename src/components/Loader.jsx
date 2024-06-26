import { useEffect, useState } from "react";

// Loader animation 
function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  // manages state
  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className="loaderContainer">
      {isLoading && (
        <div className="wrapper">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      )}
    </div>
  );
}

export default Loader;
