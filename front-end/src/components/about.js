import React from "react";
const About = props => {
  return (
    <div>
      <h1>About</h1>
      <img src={require("../Images/xabi-piano-01.jpg")} alt="Teaching" />
      <p>
        I started my own professional studies at the Conservatoire "Juan
        Crisóstomo de Arriaga" in Bilbao, followed by the renowned Conservatoire
        "Musekene" in San Sebastián for 5 years, studying under Gustavo
        Díaz-Jerez and reaching Grado Superior. I followed this with a Masters
        in Musical Interpretation and Research at VIU in Valencia under Eugen
        Indic and Francisco Escoda Padrón at the same time as doing a
        post-graduate in Contemporary Music at CSMA in Zaragoza with Ricardo
        Descalzo, Nicolás Hodges, Alberto Rosado and Yukiko Sugawara.
      </p>
      <p>
        {" "}
        I have performed in numerous concerts and recitals throughout the Basque
        Country, Spain and France, including in the Palacio Euskalduna, the
        Guggenheim in Bilbao and in the Principal and Victoria Eugenia theatres
        in San Sebastián. I've also performed in chamber groups and various
        orchestras. 
      </p>
      <p>
        My style as a teacher is to be flexible and tailor my approach to the
        student's individual needs, teaching in a clear, supportive and friendly
        way. Most importantly, I try to build my students' confidence and ensure
        that they thoroughly enjoy the classes (while of course learning the
        essential skills to progress)!{" "}
      </p>
      <p>
        Examples of the lessons I can teach include learning pieces, music
        theory, improvisation, ear training, sight reading, musicality and exam
        preparation, plus I have a particular interest in posture and technique.
      </p>
      <h2>Qualifications</h2>
      <ul>
        <li>
          Undergraduate Degree in Piano (“Grado Superior”) Conservatorio
          Musikene (San Sebastián, Spain)
        </li>
        <li>
          Masters in Musical Interpretation and Research. Valencian
          International University (Valencia, Spain)
        </li>
        <li>
          Masters in Contemporary Piano. Conservatorio Superior de Música de
          Aragón (Zaragoza, Spain)
        </li>
        <li>
          Vocal Studies. Conservatorio Francisco Escudero (San Sebastián, Spain)
        </li>
      </ul>
    </div>
  );
};
export default About;
