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
    email: "",
    name: "",
    activeItem: "home"
  };

  postReviewOnThePage = review => {
    const newstudents = this.state.students.map(student => {
      if (student.videos.length > 0) {
        return student.videos.map(video => {
          if (video.id === review.video_id) {
            video.review = review;
          }
          return student;
        })[0];
      } else {
        return student;
      }
    });
    this.setState({ students: newstudents });
  };

  updateBookingOnThePage = newBooking => {
    const newstudents = this.state.students.map(student => {
      if (student.my_bookings.length > 0) {
        return student.my_bookings.map((booking, index) => {
          if (newBooking.id === booking.id) {
            student.my_bookings[index] = newBooking;
          }
          return student;
        })[0];
      } else {
        return student;
      }
    });
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

  componentDidMount() {
    if (this.props.id) {
      fetch(`http://localhost:3000/users/${this.props.id}`)
        .then(resp => resp.json())
        .then(user => {
          if (this.props.typeOfUser === "teacher") {
            this.setState({
              students: user.students,
              name: user.name,
              // this next three lines remove email, messages, bookings and videos from state as a teacher
              email: null,
              messages: null,
              bookings: null,
              videos: null
            });
          } else {
            this.setState({
              messages: user.my_messages,
              bookings: user.my_bookings,
              videos: user.videos,
              name: user.name,
              email: user.email,
              // the next line removes students from state as a student
              students: null
            });
          }
        });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Segment color="blue" secondary>
          <Header as="h1" textAlign="center">
            Welcome to "My Space" {this.state.name}!
          </Header>
          <MySpaceNavbar />
          <Switch>
            <Route
              exact
              path="/mySpace/myBookings"
              component={() => (
                <Bookings
                  name={this.state.name}
                  email={this.state.email}
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
