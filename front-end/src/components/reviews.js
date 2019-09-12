import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";

const Reviews = () => {
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
        Reviews
      </Header>
      <div style={{ padding: "2.2em 0em" }}>
        <Segment color="blue" secondary style={{ paddingLeft: "0" }}>
          <Image
            src={require("../Images/Harriet.jpg")}
            size="small"
            floated="left"
          />
          <h2 style={{ color: "black" }}>Harriet</h2>
          <p className="p-review">
            He has been my piano teacher for the last 4 years. I've learnt how
            to be patient, pay attention to the details while studying, and keep
            time.
          </p>
        </Segment>
        <Image
          style={{ paddingRight: "1px" }}
          className="Front-image"
          src={require("../Images/Fran.jpg")}
          size="small"
          floated="right"
        />
        <h2 className="Text-right">Fran</h2>
        <Segment>
          <p className="p-review">
            Xabi really helped me to improve my piano skills. He taught me how
            to improvise, a skill I never had until I met him.
          </p>
        </Segment>
        <Segment color="teal" style={{ paddingLeft: "0" }}>
          <Image
            src={require("../Images/James.jpg")}
            size="small"
            floated="left"
          />
          <h2 style={{ color: "black" }}>James</h2>
          <p className="p-review">
            I started doing the ABRSM grades with him three years ago and I
            couldn't be happier. He always encourages a positive attitude, even
            if you don't feel like it in the beginning.
          </p>
        </Segment>
        <Image
          style={{ paddingRight: "1px" }}
          className="Front-image"
          src={require("../Images/Dunia.jpg")}
          size="small"
          floated="right"
        />
        <h2 style={{ color: "black" }} className="Text-right">
          Dunia
        </h2>
        <Segment>
          <p className="p-review">
            He is a brilliant teacher. I have improved so much since I started
            his classes. Highly recommended!
          </p>
        </Segment>
        <Segment color="blue" secondary style={{ paddingLeft: "0" }}>
          <Image
            src={require("../Images/Chechi.jpg")}
            size="small"
            floated="left"
          />
          <h2 style={{ color: "black" }}>Chechi</h2>
          <p className="p-review">
            We've studied together for a long time. He's a great, friendly and
            professional teacher. He's very patient, and has a great knowledge
            of the instrument. He's very encouraging, enthusiastic, but above
            all he knows how to teach. I totally recommend him!!
          </p>
        </Segment>
        <Image
          style={{ paddingRight: "1px" }}
          className="Front-image"
          src={require("../Images/Ayush.png")}
          size="small"
          floated="right"
        />
        <h2 style={{ color: "black" }} className="Text-right">
          Ayush
        </h2>
        <Segment>
          <p className="p-review">
            Despite my limited technique in the beginning, he taught me how to
            play some pop songs and at the same time helped me improve my
            posture. I don't have back pain anymore!
          </p>
        </Segment>
        <Segment color="teal" secondary style={{ paddingLeft: "0" }}>
          <Image
            src={require("../Images/Anna.jpg")}
            size="small"
            floated="left"
          />
          <h2 style={{ color: "black" }}>Anna</h2>
          <p className="p-review">
            He is very versatile as a teacher. I learnt how to play jazz piano
            piaces with him, while learning classical and jazz harmony to make
            accompaniments.
          </p>
        </Segment>
      </div>
    </Container>
  );
};
export default Reviews;
