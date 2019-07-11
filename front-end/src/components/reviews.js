import React from "react";
import { Container, Header, List, Segment, Image } from "semantic-ui-react";

const Reviews = props => {
  return (
    <div style={{ textAlign: "justify" }}>
      <Container text>
        <Header as="h2" textAlign="center">
          Reviews
        </Header>
        <h2>Ana</h2>
        <p>
          He has been my piano teacher for the last 4 years. I learn how to be
          pacient, looking to details while studing and not to lose my time on
          the piano.
        </p>
        <h2>Daniel</h2>

        <p>
          Xabi really helped me to improve my piano skills. He tought me how to
          improvise, a skill I never had untill I met him.
        </p>

        <h2>James</h2>
        <p>
          I startded doing the ABRSM grades with him three years ago and I
          couldn't be more happy. He always gets you to have always a positive
          actitude, even if you don't feel like in the beggining
        </p>

        <h2>Bea</h2>
        <p>
          He is a brilliant teacher and better person. I have improved so much
          since I started his classes. Highly recommended!
        </p>

        <h2>Chechi</h2>
        <p>
          We've studied together for a long time. He's a great, friendly and
          professional teacher. He's very patient, and has a great knowledge of
          the instrument. He's very encouraging, enthusiastic but above all he
          knows how to teach. I totally recommend him!!
        </p>
      </Container>
    </div>
  );
};
export default Reviews;
