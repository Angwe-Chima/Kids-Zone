import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Activities = () => {
  const bulb1 ='https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/bulb-1.png?alt=media&token=8d88a1d4-f736-499e-a644-1954a3c6401e';
  const bulb2 = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/bulb-2.png?alt=media&token=c54de7b9-22b6-4048-a462-2b2795b89ad5';
  const bulb3 = 'https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/bulb-3.png?alt=media&token=957d67bd-820c-4a6d-94b4-3415e9c6ba4a';
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: 'ease',
    });
  }, []);

  return (
    <div className="activities">
      <div>
        <h1>Dive Into Learning Fun</h1>
      </div>
      <div className="cards">
        <div className="card" data-aos="fade-right" data-aos-duration="1000">
          <img src={bulb1} alt="" />
          <h2>Creative Exploration</h2>
          <p>Explore a world where creativity knows no bounds. From art to science, we foster an environment where every child can uncover and grow their unique talents.</p>
        </div>
        <div className="card" data-aos="fade-up" data-aos-duration="3000">
          <img src={bulb2} alt="" />
          <h2>Inspired Learning</h2>
          <p>Our lessons are adventures, blending real-world insights with interactive technology. Every query leads to discovery, making learning an exciting journey.</p>
        </div>
        <div className="card" data-aos="fade-left" data-aos-duration="5000">
          <img src={bulb3} alt="" />
          <h2>Innovative Games</h2>
          <p>Jump into imaginative play that merges fun with learning. Our games are gateways to creativity, encouraging teamwork and curiosity in every challenge.</p>
        </div>
      </div>
    </div>
  )
}

export default Activities