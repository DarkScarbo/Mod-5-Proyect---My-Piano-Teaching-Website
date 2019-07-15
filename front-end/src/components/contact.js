import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const Contact = props => {
  return (
    <Container
      text
      style={{
        textAlign: "justify",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
    >
      <Header as="h1" textAlign="center">
        Contact
      </Header>
      <Image
        style={{ paddingLeft: "1px" }}
        src={require("../Images/xabi-piano-00.jpg")}
        size="large"
        floated="left"
      />
      <p className="p-review">If you want to be in contact:</p>
      <p className="p-review">
        I have over 13 years' experience teaching students of all ages and
        levels, from those just starting their journey all the way to
        professionals.
      </p>
      <p className="p-review">
        My studio is based in SE1 3GU, between London Bridge and Bermondsey.
      </p>
    </Container>
  );
};
export default Contact;
