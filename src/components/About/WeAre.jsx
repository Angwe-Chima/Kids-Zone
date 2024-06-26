function WeAre() {
  // This constant stores the image URL for the happy toddler image
  const happyToddler6 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-6.png?alt=media&token=8805d355-39ca-4f9c-aa48-5778f6b48ad3";

  // This function returns the JSX content for the "We Are" section
  return (
    <div className="we-are">
      <div className="who-we-are">
        <div className="left-side">
          {/* Header for the "Who We Are" section */}
          <h1>Who We Are</h1>
          {/* Paragraph describing Kids Zone's mission */}
          <p>
            Welcome to Kids Zone, where learning meets fun! Our team is dedicated
            to sparking curiosity and fostering creativity in children. With a range
            of activities from games to arts and crafts, we cater to various
            learning styles. Our safe online space allows children to learn, play,
            and discover. Join our vibrant community of families, educators, and
            children passionate about education and creativity.
          </p>
        </div>
        <div className="right-side">
          {/* Image of a happy toddler */}
          <img src={happyToddler6} alt="" />
        </div>
      </div>

      <div className="what-we-do">
        <div className="left-side">
          {/* Header for the "What We Do" section */}
          <h1>What We Do</h1>
          {/* Paragraph describing the types of activities offered by Kids Zone */}
          <p>
            At Kids Zone, we turn screen time into an interactive learning
            adventure for kids. Our platform is filled with engaging activities
            that educate, entertain, and inspire children throughout their
            developmental years.
          </p>
          {/* List of activity categories offered by Kids Zone */}
          <ol>
            <li>
              <strong>Numbers Fun:</strong> Count and play cool math games! 
            </li>
            <li>
              <strong>Alphabet Magic:</strong> Begin your reading journey with
              letters! ✨
            </li>
            <li>
              <strong>Color World:</strong> Mix and match for a rainbow of fun! 
            </li>
            <li>
              <strong>Animal Adventures:</strong> Roar and explore with furry
              friends! 
            </li>
            <li>
              <strong>Musical Rhymes:</strong> Sing along to catchy tunes! 
            </li>
            <li>
              <strong>Healthy Heroes:</strong> Learn about fruits and vegetables! 
            </li>
            <li>
              <strong>Brainy Quizzes:</strong> Tackle exciting Maths and Quizzes!
              
            </li>
            <li>
              <strong>Calendar Quests:</strong> Master the days and months! 
            </li>
          </ol>
        </div>
      </div>

      <div className="creators">
        {/* Header for the "Creator" section */}
        <h1>Creator</h1>
        <div>
          <h2>CEO OF KIDSZONE</h2>
          {/* Paragraph introducing the CEO and founder of Kids Zone */}
          <p>
            Introducing <strong>Angwe Destiny</strong>, our CEO and founder. A
            passionate leader in education technology, he crafted Kids Zone to
            make learning fun. His dedication transformed his vision into a
            trusted source of educational entertainment, inspiring young minds
            worldwide.
          </p>
        </div>
      </div>

      <div className="vision-mission">
        {/* Header for the "Vision And Mission" section */}
        <h1>Vision And Mission</h1>
        {/* Paragraph describing Kids Zone's vision and mission statements */}
        <p>
          Kids Zone aims to make learning fun and accessible for all children.
          They provide a variety of activities to spark a lifelong love of
          learning, fostering creativity, curiosity, and critical thinking
          skills. Their mission is to empower every child through an enjoyable
          and nurturing educational experience.
        </p>
      </div>
    </div>
  );
}

export default WeAre;
