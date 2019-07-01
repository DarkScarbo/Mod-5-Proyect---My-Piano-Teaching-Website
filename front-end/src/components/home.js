import React from "react";
const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <img src={require("../Images/Xabi.jpg")} alt="" />
      <p>
        I am a dedicated and passionate piano and music theory teacher (as well
        as performer!) originally from the north of Spain, but now living and
        working in London. I am also a classically trained singer (baritone) and
        a singing teacher.
      </p>
      <p>
        I have over 13 years' experience teaching students of all ages and
        levels, from those just starting their journey all the way to
        professionals.
      </p>
      <p>
        My studio is based in SE1 3GU, between London Bridge and Bermondsey.
      </p>
    </div>
  );
};
export default Home;
