import React from "react";
import YouTube from "react-youtube";
import { postReview } from "../services/api";
import { Card, Accordion, Icon, Form, Button } from "semantic-ui-react";

class VideoCard extends React.Component {
  state = {
    activeIndex: -1
  };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  handleReviewSubmit = e => {
    e.preventDefault();
    const text = e.target.review.value;
    const video_id = this.props.video.id;
    const teacher_id = this.props.id;
    postReview(text, video_id, teacher_id).then(review =>
      this.props.postReviewOnThePage(review)
    );
  };

  render() {
    const { activeIndex } = this.state;
    const opts = {
      height: "390",
      width: "640"
    };
    return (
      <div>
        <Card fluid>
          <Card.Content>
            <YouTube
              videoId={this.props.video.url}
              opts={opts}
              onReady={this._onReady}
            />
            <Card.Header>{this.props.video.title}</Card.Header>
            <Card.Description>{this.props.video.description}</Card.Description>
          </Card.Content>
          <Accordion fluid styled>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Review
              {this.props.video.review ? (
                <Icon name="checkmark" />
              ) : (
                <Icon name="close" />
              )}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              {this.props.typeOfUser === "teacher" ? (
                this.props.video.review ? (
                  <p>
                    {this.props.video.review && this.props.video.review.text}
                  </p>
                ) : (
                  <Form onSubmit={this.handleReviewSubmit}>
                    <Form.TextArea
                      label="Review"
                      placeholder="Review"
                      name="review"
                    />
                    <Button type="submit">Submit</Button>
                  </Form>
                )
              ) : (
                <p>{this.props.video.review && this.props.video.review.text}</p>
              )}
            </Accordion.Content>
          </Accordion>
        </Card>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoCard;
