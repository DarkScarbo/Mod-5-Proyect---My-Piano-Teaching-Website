import React from "react";
import Messages from "./messages";
import MessagesTeacher from "./messagesTeacher";
import Bookings from "./bookings";
import Videos from "./videos";
import { Route, Switch } from "react-router-dom";
import MySpaceNavbar from "./mySpaceNavbar";
import { Segment, Header } from "semantic-ui-react";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    students: [],
    activeItem: "home"
  };

  postReviewOnThePage = review => {
    const newstudents = this.state.students.map(
      student =>
        student.videos.map(video => {
          if (video.id === review.video_id) {
            video.review = review;
          }
          return student;
        })[0]
    );
    this.setState({ students: newstudents });
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
    if (this.state.messages) {
      this.setState({ messages: [...this.state.messages, message] });
    } else {
      const newstudents = this.state.students.map(student => {
        if (student.id === message.student_id) {
          student.my_messages = [...student.my_messages, message];
        }
        return student;
      });
      this.setState({ students: newstudents });
    }
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
        <Segment color="blue" secondary>
          <Header as="h2" textAlign="center">
            Welcome to My Space {this.props.name}!
          </Header>
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
                  postReviewOnThePage={this.postReviewOnThePage}
                />
              )}
            />
            <Route
              exact
              path="/mySpace/myMessages"
              component={() =>
                this.props.typeOfUser === "student" ? (
                  <Messages
                    messages={this.state.messages}
                    id={this.props.id}
                    name={this.props.name}
                    typeOfUser={this.props.typeOfUser}
                    postMessageOnThePage={this.postMessageOnThePage}
                  />
                ) : (
                  <MessagesTeacher
                    students={this.state.students}
                    id={this.props.id}
                    name={this.props.name}
                    typeOfUser={this.props.typeOfUser}
                    postMessageOnThePage={this.postMessageOnThePage}
                  />
                )
              }
            />
          </Switch>
        </Segment>
      </div>
    );
  }
}

export default MySpace;
