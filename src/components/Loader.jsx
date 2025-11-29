import { useEffect, useState } from "react";

function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timeout to prevent infinite loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Max 2 seconds for loader

    const handleLoad = () => {
      setIsLoading(false);
      clearTimeout(timeout);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      setIsLoading(false);
      clearTimeout(timeout);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loaderContainer">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default Loader;