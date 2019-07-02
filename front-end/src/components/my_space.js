import React from "react";
import Messages from "./messages";
import Bookings from "./bookings";
import Videos from "./videos";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    reviews: []
  };

  componentDidMount() {
    if (!this.props.name) {
      this.props.history.push("./");
    }
  }
  render() {
    return (
      <div>
        This is my space
        {/* <Messages />
        <Bookings />
        <Videos /> */}
      </div>
    );
  }
}

export default MySpace;
