import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LearnElements from "./components/Data/LearnElements";
import Loader from "./components/Loader";
import SideMenuBar from "./components/SideMenuBar";
import ScrollToTop from "./components/script/ScrollToTop";

// Lazy loading components
const Home = lazy(() => import("./components/Home"));
const Learn = lazy(() => import("./components/Learn"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <Router>
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
