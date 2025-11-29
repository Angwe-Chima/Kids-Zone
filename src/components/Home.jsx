import { lazy, Suspense } from "react";
import Header from "./Home/Header";
import SkeletonLoading from "../components/SkelotonLoading";
import "../style/home.css";

// Lazy load heavy components
const Activities = lazy(() => import("./Home/Activities"));
const LearningMoments = lazy(() => import("./Home/LearningMoments"));
const WhatWeOffer = lazy(() => import("./Home/WhatWeOffer"));
const LearnNow = lazy(() => import("./Home/LearnNow"));

function Home() {
  return (
    <div className="home">
      <Header />

      <Suspense fallback={<SkeletonLoading />}>
        <Activities />
      </Suspense>

      <Suspense fallback={<SkeletonLoading />}>
        <LearningMoments />
      </Suspense>

      <Suspense fallback={<SkeletonLoading />}>
        <WhatWeOffer />
      </Suspense>

      <Suspense fallback={<SkeletonLoading />}>
        <LearnNow />
      </Suspense>
    </div>
  );
}

export default Home;
