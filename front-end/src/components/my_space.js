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
              videos: user.reviews
            });
          }
        })
        .then(() =>
          fetchStudentVideosForTeacher(this.state.studentsIds).then(videos =>
            this.setState({ videos: videos.filter(video => video.length > 0) })
          )
        );
      // if (this.state.studentsIds.length > 0) {
      // fetchStudentVideosForTeacher(this.state.studentsIds);
      // }

      // if (this.state.studentsIds.length > 0) {
      //   fetchStudentVideosForTeacher(this.state.studentsIds).then(videos =>
      //     this.setState({ videos: videos })
      //   );
      // }
    }
  }

  // componentDidUpdate() {
  //   if (this.state.videos.length < 1) {
  //     this.getVids();
  //   }
  // }

  // getVids = () => {
  //   if (this.state.studentsIds.length > 0) {
  //     fetchStudentVideosForTeacher(this.state.studentsIds).then(videos =>
  //       this.setState({ videos })
  //     );
  //   }
  // };
  render() {
    return (
      <div>
        This is my space
        {/* <Messages />
        <Bookings />
      <Videos /> */}
        {/* {this.getVids()} */}
      </div>
    );
  }
}

export default MySpace;
