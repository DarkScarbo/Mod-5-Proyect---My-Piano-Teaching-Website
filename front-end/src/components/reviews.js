import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";

const Reviews = props => {
  return (
    <div style={{ textAlign: "justify" }}>
      <Container text>
        <Header as="h2" textAlign="center">
          Reviews
        </Header>
        <Segment color="blue" secondary>
          <Image
            src={require("../Images/Harriet.jpg")}
            size="small"
            floated="left"
          />
          <h2>Harriet</h2>
          <p>
            He has been my piano teacher for the last 4 years. I learn how to be
            pacient, looking to details while studing and not to lose my time on
            the piano.
          </p>
        </Segment>
        <Image
          className="Front-image"
          src={require("../Images/Fran.jpg")}
          size="small"
          floated="right"
        />
        <h2>Fran</h2>
        <p>
          Xabi really helped me to improve my piano skills. He tought me how to
          improvise, a skill I never had untill I met him.
        </p>
        <Segment color="teal">
          <Image
            src={require("../Images/James.jpg")}
            size="small"
            floated="left"
          />
          <h2>James</h2>
          <p>
            I startded doing the ABRSM grades with him three years ago and I
            couldn't be more happy. He always gets you to have always a positive
            actitude, even if you don't feel like in the beggining.
          </p>
        </Segment>
        <Image
          className="Front-image"
          src={require("../Images/Dunia.jpg")}
          size="small"
          floated="right"
        />
        <h2>Dunia</h2>
        <p>
          He is a brilliant teacher and better person. I have improved so much
          since I started his classes. Highly recommended!
        </p>
        <Segment color="blue" secondary>
          <Image
            src={require("../Images/Chechi.jpg")}
            size="small"
            floated="left"
          />
          <h2>Chechi</h2>
          <p>
            We've studied together for a long time. He's a great, friendly and
            professional teacher. He's very patient, and has a great knowledge
            of the instrument. He's very encouraging, enthusiastic but above all
            he knows how to teach. I totally recommend him!!
          </p>
        </Segment>
        <Image
          className="Front-image"
          src={require("../Images/Ayush.png")}
          size="small"
          floated="right"
        />
        <h2>Ayush</h2>
        <p>
          Despite my little technique in the beggining, he taught me how to play
          som pop songs and at the same time made my improved my posture. I
          don't have back pain anymore!
        </p>
        <Segment color="teal" secondary>
          <Image
            src={require("../Images/Ana.jpg")}
            size="small"
            floated="left"
          />
          <h2>Ana</h2>
          <p>
            He is very versatile as a teacher. I leant how to play jazz piano
            piaces with him while leaarning classical and jazz harmony to make
            accompainements.
          </p>
        </Segment>
      </Container>
    </div>
  );
};
export default Reviews;
