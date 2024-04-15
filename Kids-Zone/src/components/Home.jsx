import Header from "./Home/Header"
import Activities from "./Home/Activities"
import LearningMoments from "./Home/LearningMoments"
import WhatWeOffer from "./Home/WhatWeOffer"
import LearnNow from "./Home/LearnNow"
import '../style/home.css'

function Home() {
  return (
    <div className="home">
      <Header/>
      <Activities/>
      <LearningMoments/>
      <WhatWeOffer/>
      <LearnNow/>
    </div>
  )
}

export default Home