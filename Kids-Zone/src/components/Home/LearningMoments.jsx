function LearningMoments() {
  const activity3 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-3.png?alt=media&token=29690bac-39ec-4b00-8839-11748bbbc884";
  const activity5 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-5.png?alt=media&token=d6c8fbb9-7ab5-480a-b510-c26c3788054c";
  const activity7 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-7.png?alt=media&token=8ff90f50-38b9-4fe3-9353-49d3a7464432";
  const activity8 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/fun-activity-8.png?alt=media&token=eeaf30a3-6ac4-41fc-8a7a-509fe52d33a5";

  return (
    <div className="learning-moments">
      <h1>Interactive Learning Moments</h1>
      <div className="all-activities">
        <div>
          <div className="act-img-div">
            <img src={activity3} alt="" />
          </div>{" "}
          <p>
            Join in the excitement of learning through play, where every
            activity is an adventure filled with laughter, discovery, and growth
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
            Witness the creativity and problem-solving skills of our young
            builder as they construct imaginative structures with colorful
            blocks.
          </p>
        </div>
        <div>
          <div className="act-img-div">
            <img src={activity7} alt="" />
          </div>{" "}
          <p>
            See the joy on our toddlers face as they enjoy a nutritious glass of
            milk, promoting strong bones and a healthy start to the day
          </p>
        </div>
      </div>
    </div>
  );
}

export default LearningMoments;
