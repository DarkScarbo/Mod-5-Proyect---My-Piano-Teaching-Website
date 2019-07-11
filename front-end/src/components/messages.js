import React from "react";
import MessageCard from "./messageCard";
import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";
import { postMessage } from "../services/api";

class Messages extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;
    let creator_id;
    let student_id;
    let teacher_id;
    if (this.props.typeOfUser === "student") {
      student_id = this.props.id;
      teacher_id = 1;
      creator_id = this.props.id;
    } else {
      student_id = this.props.id;
      teacher_id = this.props.id;
      creator_id = this.props.teacherId;
    }
    postMessage(text, creator_id, student_id, teacher_id).then(message =>
      this.props.postMessageOnThePage(message)    );
  };

  render() {
    return (
      <Comment.Group minimal style={{ margin: "1.5em auto" }}>
        <Header as="h3" dividing>
          Messages
        </Header>
        <Segment>
          {this.props.messages &&
            this.props.messages.map((message, index) => (
              <MessageCard
                key={index}
                message={message}
                name={this.props.name}
                id={this.props.id}
              />
            ))}

          <Form reply onSubmit={this.handleSubmit}>
            <textarea name="text" required />
            <Button
              content="Add Message"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </Segment>
      </Comment.Group>
    );
  }
}

export default Messages;
