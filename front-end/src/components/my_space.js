import React from "react";
import Messages from "./messages";
import Bookings from "./bookings";
import Videos from "./videos";
import { fetchStudentVideosForTeacher } from "../services/api";

class MySpace extends React.Component {
  state = {
    messages: [],
    bookings: [],
    videos: [],
    reviews: [],
    studentsIds: []
  };

  componentDidMount() {
    if (!this.props.name) {
      this.props.history.push("./");
    }
    if (this.props.id) {
      fetch(`http://localhost:3000/users/${this.props.id}`)
        .then(resp => resp.json())
        .then(user => {
          if (this.props.typeOfUser === "teacher") {
            this.setState({
              messages: user.my_messages,
              bookings: user.my_bookings,
              reviews: user.reviews,
              studentsIds: user.students.map(student => student.id)
            });
          } else {
            this.setState({
              messages: user.my_messages,
              bookings: user.my_bookings,
              videos: user.videos
            });
          }
        })
        .then(() => {
          if (this.props.typeOfUser == "teacher")
            fetchStudentVideosForTeacher(this.state.studentsIds).then(videos =>
              this.setState({
                videos: videos.filter(video => video.length > 0)
              })
            );
        });
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
