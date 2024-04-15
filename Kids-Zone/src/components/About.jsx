import '../style/about.css'
import Header from "./About/Header"
import WeAre from './About/WeAre'
import Review2 from './About/Review2'


function About() {
  return (
    <div className="about">
      <Header/>
      <WeAre/>
      <Review2/>
    </div>
  )
}

export default About