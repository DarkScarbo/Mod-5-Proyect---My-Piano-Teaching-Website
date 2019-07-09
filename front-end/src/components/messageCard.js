import React from "react";
import { Comment } from "semantic-ui-react";

const MessageCard = props => {
  const date = props.message.created_at.slice(0, 10);
  const time = props.message.created_at.slice(11, 16);
  return (
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Comment.Author>
          {props.message.creator_id === props.message.student_id
            ? props.name
            : "Xabi"}
        </Comment.Author>
        <Comment.Metadata>
          <span>
            {date}, at {time}.
          </span>
        </Comment.Metadata>
        <Comment.Text>{props.message.text}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

export default MessageCard;
