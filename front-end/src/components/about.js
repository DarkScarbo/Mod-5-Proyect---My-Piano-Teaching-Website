import React from "react";
import { Container, Header, List, Segment, Image } from "semantic-ui-react";

const About = () => {
  return (
    <div
      style={{ textAlign: "justify", marginBottom: "20px" }}
      className="Ondine-backgroung"
    >
      {/* <Segment secondary> */}
      <Container text>
        <Header as="h1" textAlign="center">
          About
        </Header>
        <Segment secondary>
          <Image
            src={require("../Images/Xabi.jpg")}
            size="small"
            floated="left"
          />
          <p>
            I am a dedicated and passionate piano and music theory teacher (as
            well as performer!) originally from the north of Spain, but now
            living and working in London. I am also a classically trained singer
            (baritone) and a singing teacher.
          </p>
          <p>
            I have over 13 years' experience teaching students of all ages and
            levels, from those just starting their journey all the way to
            professionals. My studio is based in SE1 3GU, in London Bridge.
          </p>
          <p>
            I started my own professional studies at the Conservatoire "Juan
            Crisóstomo de Arriaga" in Bilbao, followed by the renowned
            Conservatoire "Musikene" in San Sebastián for 5 years, studying
            under Gustavo Díaz-Jerez and reaching Grado Superior. I followed
            this with a Masters in Musical Interpretation and Research at VIU in
            Valencia under Eugen Indic and Francisco Escoda Padrón at the same
            time as doing a post-graduate in Contemporary Music at CSMA in
            Zaragoza with Ricardo Descalzo, Nicolás Hodges, Alberto Rosado and
            Yukiko Sugawara.
          </p>
          <p>
            {" "}
            I have performed in numerous concerts and recitals throughout the
            Basque Country, Spain and France, including in the Palacio
            Euskalduna, the Guggenheim in Bilbao and in the Principal and
            Victoria Eugenia theatres in San Sebastián. I've also performed in
            chamber groups and various orchestras. 
            <video
              style={{ float: "right", marginLeft: 13 }}
              align="cener"
              width="400"
              height="300"
              controls
              src={require("../Images/Video.mp4")}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </p>
          <p>
            My style as a teacher is to be flexible and tailor my approach to
            the student's individual needs, teaching in a clear, supportive and
            friendly way. Most importantly, I try to build my students'
            confidence and ensure that they thoroughly enjoy the classes (while
            of course learning the essential skills to progress)!{" "}
          </p>
          <p>
            Examples of the lessons I can teach include learning pieces, music
            theory, improvisation, ear training, sight reading, musicality and
            exam preparation, plus I have a particular interest in posture and
            technique.
          </p>
        </Segment>
        <Segment secondary style={{ marginBottom: "20px" }}>
          <Header as="h2" textAlign="center">
            Qualifications
          </Header>
          <List bulleted>
            <List.Item>
              Undergraduate Degree in Piano (“Grado Superior”) Conservatorio
              Musikene (San Sebastián, Spain)
            </List.Item>
            <List.Item>
              Masters in Musical Interpretation and Research. Valencian
              International University (Valencia, Spain)
            </List.Item>
            <List.Item>
              Masters in Contemporary Piano. Conservatorio Superior de Música de
              Aragón (Zaragoza, Spain)
            </List.Item>
            <List.Item>
              Vocal Studies. Conservatorio Francisco Escudero (San Sebastián,
              Spain)
            </List.Item>
          </List>
        </Segment>
      </Container>
      {/* </Segment> */}
    </div>
  );
};
export default About;
