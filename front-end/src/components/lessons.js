import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const Lessons = () => {
  return (
    <Container
      text
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        textAlign: "justify"
      }}
    >
      <Header
        as="h1"
        textAlign="center"
        style={{ textDecoration: "underline" }}
      >
        Lessons
      </Header>
      <div style={{ padding: "3.45em 0em" }}>
        <Image
          style={{ paddingLeft: "1px" }}
          src={require("../Images/xabi-piano-02.jpg")}
          size="medium"
          floated="left"
        />
        <Header as="h2">Tutoring Experience:</Header>
        <p className="p-review">
          I have been teaching the piano for over 10 years to the full range of
          students, from those just starting their journey all the way to
          professionals. My repertoire includes both the classical and also the
          jazz tradition.
        </p>
        <Header as="h2">Tutorial Approach:</Header>
        <p className="p-review">
          I'm a dedicated and passionate teacher with a thorough approach,
          always getting the best out of my students. I adapt to new students
          with ease, teaching in a clear, relaxed, supportive and friendly way. 
        </p>
        <Image
          style={{ paddingRight: "1px" }}
          src={require("../Images/xabi-playing-04.jpg")}
          size="medium"
          floated="right"
        />
        <p className="p-review">
          The most important objective of a lesson is that they are fun,
          engaging, and rewarding. I have an individualized approach that
          focuses on each student's strengths and areas for improvement in a
          highly supportive and encouraging environment. 
        </p>
        <p className="p-review">
          My approach to teaching is flexible and I'm very happy to tailor to my
          student’s needs. I will happily stick to an exam board syllabus, avoid
          this entirely, or offer some combination of approach – whatever
          suits! 
        </p>
        <Image
          style={{ paddingLeft: "1px" }}
          src={require("../Images/xabi-playing-01.jpg")}
          size="medium"
          floated="left"
        />
        <p className="p-review">
          Examples of the lessons I can teach include learning pieces, music
          theory, improvisation, ear training, sight reading, musicality and
          exam preparation, plus I have a particular interest in posture and
          technique.
        </p>
        <p className="p-review">
          At the end of each lesson (If they are happy with this) students are
          given weekly assignments for them to work on during the week. 
        </p>
      </div>
    </Container>
  );
};
export default Lessons;
