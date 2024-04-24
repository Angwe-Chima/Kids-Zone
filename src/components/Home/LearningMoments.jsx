function LearningMoments() {
  const activity3 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-3.png?alt=media&token=29690bac-39ec-4b00-8839-11748bbbc884";
  const activity5 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-5.png?alt=media&token=d6c8fbb9-7ab5-480a-b510-c26c3788054c";
  const activity8 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-8.png?alt=media&token=eeaf30a3-6ac4-41fc-8a7a-509fe52d33a5";

  return (
    <div className="learning-moments">
      <h1>Learning Moments</h1>
      <div className="all-activities">
        <div>
          <div className="act-img-div">
            <img src={activity3} alt="" />
          </div>{" "}
          <p>
            Experience the joy of learning through play, where every activity is
            an adventure of laughter, discovery, and growth.
          </p>
        </div>
        <div>
          <div className="act-img-div">
            <img src={activity8} alt="" />
          </div>{" "}
          <p>
            Watch as our little one learns the importance of dental hygiene,
            brushing those tiny teeth with enthusiasm and care.
          </p>
        </div>
        <div>
          <div className="act-img-div">
            <img src={activity5} alt="" />
          </div>{" "}
          <p>
            See our young builders creativity and problem-solving skills shine
            as they construct imaginative structures with colorful blocks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearningMoments;
