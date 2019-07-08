import React from "react";
import VideosList from "./videosList";
import { Button, Form } from "semantic-ui-react";

class Videos extends React.Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>URL</label>
            <input placeholder="URL" />
          </Form.Field>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" />
          </Form.Field>
          <Form.TextArea label="Description" placeholder="Description" />
          <Button type="submit">Submit</Button>
        </Form>
        {this.props.videos.map((video, index) => (
          <VideosList key={index} video={video} />
        ))}
      </div>
    );
  }
}

export default Videos;
