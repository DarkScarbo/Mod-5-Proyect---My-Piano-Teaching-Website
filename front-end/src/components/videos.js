import React from "react";
import VideoCard from "./videoCard";
import { Button, Form } from "semantic-ui-react";
import { postVideo } from "../services/api";

class Videos extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const user_id = this.props.id;
    postVideo(url, title, description, user_id).then(video =>
      this.props.postVideoOnThePage(video)
    );
  };

  render() {
    return (
      <div>
        {this.props.typeOfUser === "student" && (
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>URL</label>
              <input placeholder="URL" name="url" required />
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input placeholder="Title" name="title" required />
            </Form.Field>
            <Form.TextArea
              label="Description"
              placeholder="Description"
              name="description"
            />
            <Button type="submit">Submit</Button>
          </Form>
        )}
        {this.props.typeOfUser === "student"
          ? this.props.videos.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                typeOfUser={this.props.typeOfUser}
              />
            ))
          : this.props.students.map(student =>
              student.videos.map((video, index) => (
                <VideoCard
                  key={index}
                  video={video}
                  typeOfUser={this.props.typeOfUser}
                />
              ))
            )}
      </div>
    );
  }
}

export default Videos;
{
  /* {this.props.typeOfUser === "student"
        ? this.props.videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            typeOfUser={this.props.typeOfUser}
          />
          : "yui"
        } */
}
