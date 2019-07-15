import React from "react";
import VideoCard from "./videoCard";
import { Button, Form, Segment, Header } from "semantic-ui-react";
import { postVideo } from "../services/api";

class Videos extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const url = e.target.url.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const student_id = this.props.id;
    postVideo(url, title, description, student_id).then(video =>
      this.props.postVideoOnThePage(video)
    );
  };

  render() {
    return (
      <div>
        {this.props.typeOfUser === "student" && (
          <Segment>
            <Header as="h3" dividing>
              Videos
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field>
                  <label>URL- https://www.youtube.com/watch?v= </label>
                  <input placeholder="URL" name="url" required />
                </Form.Field>
                <Form.Field>
                  <label>Title</label>
                  <input placeholder="Title" name="title" required />
                </Form.Field>
              </Form.Group>
              <Form.TextArea
                label="Description"
                placeholder="Description"
                name="description"
              />
              <Button type="submit" color="blue">
                Submit
              </Button>
            </Form>
          </Segment>
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
                  id={this.props.id}
                  postReviewOnThePage={this.props.postReviewOnThePage}
                />
              ))
            )}
      </div>
    );
  }
}

export default Videos;
