import React from "react";
import { Container, Header, Image } from "semantic-ui-react";

const Contact = () => {
  return (
    <Container
      text
      style={{
        textAlign: "justify",
        backgroundColor: "rgba(255, 255, 255, 0.9)"
      }}
    >
      <Header
        as="h1"
        textAlign="center"
        color="blue"
        style={{ textDecoration: "underline", fontWeight: "normal" }}
      >
        Contact
      </Header>
      <div style={{ padding: "1.2em 0em" }}>
        <Image
          style={{ paddingLeft: "1px" }}
          src={require("../Images/xabi-piano-00.jpg")}
          size="large"
          floated="left"
        />
        <Header as="h2" style={{ fontWeight: "normal" }} className="p-review">
          To get in touch
        </Header>
        <div className="p-review">
          Mobile phone:
          <p style={{ fontWeight: "normal" }}>07539 175 029 </p>
        </div>
        <div className="p-review">
          Email:
          <p style={{ fontWeight: "normal" }}>xabi.casan.piano@gmail.com</p>
        </div>
        <div className="p-review">
          Studio:
          <p style={{ fontWeight: "normal" }}>SE1 3GU, London Bridge.</p>
          <p>-------------------------------------- </p>
        </div>
        <p className="p-review">Sign up or log in for more content!</p>
      </div>
    </Container>
  );
};
export default Contact;
