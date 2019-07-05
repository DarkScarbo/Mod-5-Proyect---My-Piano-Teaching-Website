import React from "react";
import Messages from "./messages";
import Bookings from "./bookings";
import Videos from "./videos";
// import { fetchStudentVideosForTeacher } from "../services/api";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    students: []
  };

  componentDidMount() {
    if (!this.props.name) {
      this.props.history.push("./");
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
        })
    }
  }

  render() {
    return (
      <div>
        This is my space
        {/* <Messages />
        <Bookings />
        <Videos />  */}
      </div>
    );
  }
}

export default MySpace;
