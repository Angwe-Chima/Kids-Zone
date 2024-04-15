function WeAre() {
  const happyToddler5 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-5.png?alt=media&token=e2abad72-2752-4a58-935f-067ec63dddc2";
  const happyToddler6 =
    "https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/happy-toddlers-6.png?alt=media&token=8805d355-39ca-4f9c-aa48-5778f6b48ad3";

  return (
    <div className="we-are">
      <div className="who-we-are">
        <div className="left-side">
          <h1>Who We Are</h1>
          <p>
            Welcome to Kids Zone, where learning meets fun! Our team is
            dedicated to sparking curiosity and fostering creativity in
            children. With a range of activities from games to arts and crafts,
            we cater to various learning styles. Our safe online space allows
            children to learn, play, and discover. Join our vibrant community of
            families, educators, and children passionate about education and
            creativity
          </p>
        </div>
        <div className="right-side">
          <img src={happyToddler6} alt="" />
        </div>
      </div>
      <div className="what-we-do">
        <div className="left-side">
          <h1>what we do</h1>
          <p>
            At Kids Zone, we turn screen time into an interactive learning
            adventure for kids. Our platform is filled with engaging activities
            that educate, entertain, and inspire children throughout their
            developmental years.
          </p>
          <ol>
            <li>
              <strong>Numbers Fun:</strong> Count and play cool math games! 🚀
            </li>
            <li>
              <strong>Alphabet Magic:</strong> Begin your reading journey with
              letters! ✨
            </li>
            <li>
              <strong>Color World:</strong> Mix and match for a rainbow of fun!
              🌈
            </li>
            <li>
              <strong>Animal Adventures:</strong> Roar and explore with furry
              friends! 🐾
            </li>
            <li>
              <strong>Musical Rhymes:</strong> Sing along to catchy tunes! 🎵
            </li>
            <li>
              <strong>Healthy Heroes:</strong> Learn about fruits and
              vegetables! 🍎
            </li>
            <li>
              <strong>Brainy Quizzes:</strong> Tackle exciting Maths and
              Quizzes! 🧠
            </li>
            <li>
              <strong>Calendar Quests:</strong> Master the days and months! 📆
            </li>
          </ol>
        </div>
      </div>

      <div className="creators">
        <h1>Creator</h1>
        <div>
          <h2>CEO</h2>
          <h4>
            Introducing our CEO and Founder, <span>Angwe Destiny</span>, the
            driving force behind <span>Kids Zone</span>. He not only lead our
            team but also personally crafted the website, embodying our
            commitment to hands-on, innovative learning experiences. With a deep{" "}
            <span>passion</span> for education and technology,{" "}
            <span>Destiny</span> envisioned a platform where children could
            learn and have fun simultaneously. His <span>dedication</span> has
            transformed this vision into a reality, making{" "}
            <span>Kids Zone</span> a trusted source for educational
            entertainment. Through his <span>leadership</span>, we continue to
            evolve, striving to inspire young minds worldwide.
          </h4>
        </div>
      </div>

      <div className="vision-mission">
        <h1>Vision And Mission</h1>
        <p>
          At Kids Zone, our core mission is to spark a lifelong passion for
          learning, merging education with fun to inspire, educate, and empower
          every child. We envision a world where learning is an exciting
          adventure, accessible and enjoyable for all, creating a nurturing
          environment that fosters creativity, curiosity, and confidence. By
          offering a diverse blend of activities, from Alphabet Adventures to
          Maths Quizzes, we aim to build a foundation for early learning that
          encourages kids to explore their potential, develop critical thinking
          skills, and cultivate empathy and knowledge. Our commitment is to
          transform the educational landscape, making learning a joyful journey
          that equips children for a future filled with possibilities.
        </p>
      </div>
    </div>
  );
}

export default WeAre;
