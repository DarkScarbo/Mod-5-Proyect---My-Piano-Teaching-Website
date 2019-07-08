import React from "react";
import YouTube from "react-youtube";
import { Card, Accordion, Icon } from "semantic-ui-react";

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
              <p>{this.props.video.review && this.props.video.review.text}</p>
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
