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
    activeItem: "home"
  };

  updateBookingOnThePage = newBooking => {
    const newstudents = this.state.students.map(
      student =>
        student.my_bookings.map((booking, index) => {
          if (newBooking.id === booking.id) {
            student.my_bookings[index] = newBooking;
          }
          return student;
        })[0]
    );
    this.setState({ students: newstudents });
  };
  postMessageOnThePage = message => {
    this.setState({ messages: [...this.state.messages, message] });
  };

  postBookingOnThePage = booking => {
    this.setState({ bookings: [...this.state.bookings, booking] });
  };

  postVideoOnThePage = video => {
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
              // this next three lines remove messages, bookings and videos from state as a teacher
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
        Welcome to My Space {this.props.name}!
        <MySpaceNavbar />
        <Switch>
          <Route
            exact
            path="/mySpace/myBookings"
            component={() => (
              <Bookings
                students={this.state.students}
                typeOfUser={this.props.typeOfUser}
                bookings={this.state.bookings}
                id={this.props.id}
                postBookingOnThePage={this.postBookingOnThePage}
                updateBookingOnThePage={this.updateBookingOnThePage}
              />
            )}
          />
          <Route
            exact
            path="/mySpace/myVideos"
            component={() => (
              <Videos
                students={this.state.students}
                typeOfUser={this.props.typeOfUser}
                videos={this.state.videos}
                id={this.props.id}
                postVideoOnThePage={this.postVideoOnThePage}
              />
            )}
          />
          <Route
            exact
            path="/mySpace/myMessages"
            component={() => (
              <Messages
                students={this.state.students}
                messages={this.state.messages}
                id={this.props.id}
                name={this.props.name}
                typeOfUser={this.props.typeOfUser}
                postMessageOnThePage={this.postMessageOnThePage}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MySpace;
