import { lazy, Suspense } from 'react';
import '../style/about.css';
import Header from "./About/Header";
import SkeletonLoading from "../components/SkelotonLoading";

// Lazy load heavy components
const WeAre = lazy(() => import('./About/WeAre'));
const Review2 = lazy(() => import('./About/Review2'));

function About() {
  return (
    <div className="about">
      <Header />
      
      <Suspense fallback={<SkeletonLoading />}>
        <WeAre />
      </Suspense>
      
      <Suspense fallback={<SkeletonLoading />}>
        <Review2 />
      </Suspense>
    </div>
  );
}

export default About;