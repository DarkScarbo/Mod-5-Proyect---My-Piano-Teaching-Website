import React from "react";
import MessageCard from "./messageCard";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { postMessage } from "../services/api";

class Messages extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const text = e.target.text.value;
    const creator_id = this.props.id;
    let student_id;
    let teacher_id;
    if (this.props.typeOfUser === "student") {
      student_id = this.props.id;
      teacher_id = 1;
    } else {
      // const student_id = e.target.description.value;
      teacher_id = this.props.id;
    }
    postMessage(text, creator_id, student_id, teacher_id).then(message =>
      this.props.postMessageOnThePage(message)
    );
  };

  render() {
    return (
      <Comment.Group minimal>
        <Header as="h3" dividing>
          Messages
        </Header>

        {this.props.messages.map(message => (
          <MessageCard
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
      </Comment.Group>
    );
  }
}

export default Messages;
