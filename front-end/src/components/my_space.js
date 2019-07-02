import React from "react";
import Messages from "./messages";
import Bookings from "./bookings";
import Videos from "./videos";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    reviews: [],
    students: []
  };

  componentDidMount() {
    if (!this.props.name) {
      this.props.history.push("./");
    }
    fetch(`http://localhost:3000/users/${this.props.id}`)
      .then(resp => resp.json())
      .then(user => {
        if (this.props.typeOfUser === "teacher") {
          this.setState({
            messages: user.my_messages,
            bookings: user.my_bookings,
            reviews: user.reviews,
            students: user.students
          });
        } else {
        }
      });
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
