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
        Movile Phone: <br />
        07539175029
      </p>
      <p className="p-review">Email: xabi.casan.piano@gmail.com</p>
      <p className="p-review">
        Studio:
        <br /> SE1 3GU, London Bridge.
      </p>

      <p className="p-review">Sign up or Log in for more content!</p>
    </Container>
  );
};
export default Contact;
