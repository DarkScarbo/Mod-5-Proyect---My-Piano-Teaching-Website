import React from "react";
import Messages from "./messages";
import Bookings from "./bookings";
import Videos from "./videos";
import { Route, Switch } from "react-router-dom";
import MySpaceNavbar from "./mySpaceNavbar";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    students: [],
    activeItem: "bio"
  };

  postVideoOnThePage = video => {
    debugger;
    this.setState({ videos: [...this.state.videos, video] });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  componentDidMount() {
    if (!this.props.name) {
      this.props.history.push("/");
    }
    if (this.props.id) {
      fetch(`http://localhost:3000/users/${this.props.id}`)
        .then(resp => resp.json())
        .then(user => {
          console.log(user);
          if (this.props.typeOfUser === "teacher") {
            this.setState({
              students: user.students,
              // this three next lines remove messages, bookings and videos from state as a teacher
              messages: user.my_messages,
              bookings: user.my_bookings,
              videos: user.videos
            });
          } else {
            this.setState({
              messages: user.my_messages,
              bookings: user.my_bookings,
              videos: user.videos,
              // the next line removes students from state as a student
              students: user.students
            });
          }
        });
    }
  }

  render() {
    return (
      <div>
        My Space
        <MySpaceNavbar />
        <Switch>
          <Route
            exact
            path="/mySpace/myBookings"
            component={() => (
              <Bookings
                typeOfUser={this.state.typeOfUser}
                bookings={this.state.bookings}
                id={this.props.id}
              />
            )}
          />
          <Route
            exact
            path="/mySpace/myVideos"
            component={() => (
              <Videos
                videos={this.state.videos}
                id={this.props.id}
                postVideoOnThePage={this.postVideoOnThePage}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MySpace;
