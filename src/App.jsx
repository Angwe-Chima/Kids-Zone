import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LearnElements from "./components/Data/LearnElements";
import Loader from "./components/Loader";
import SideMenuBar from "./components/SideMenuBar";
import ScrollToTop from "./components/script/ScrollToTop";
import Home from "./components/Home";

// Lazy load only non-critical pages
const Learn = lazy(() => import("./components/Learn"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleLoad = () => {
      setIsLoading(false);
      clearTimeout(timer);
    };

    window.addEventListener("load", handleLoad);
    
    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router basename={import.meta.env.MODE === 'production' ? '/Kids-Zone' : '/'}>
      <ScrollToTop />
      <div className="App">
        <SideMenuBar />
        <NavBar />
        <div className="contents">
          {isLoading && <Loader />}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn" element={<Learn />} />
              {LearnElements.map((element) => (
                <Route
                  key={element.id}
                  path={`/learn/${element.urlTitle}`}
                  element={<element.Component />}
                />
              ))}
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;