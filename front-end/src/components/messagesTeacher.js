import React from "react";
import { Dropdown } from "semantic-ui-react";
import Messages from "./messages";

class MessagesTeacher extends React.Component {
  state = {
    studentOptions: [],
    selectedStudent: null
  };

  changeStudent = e => {
    const email = e.target.innerText.split(", ")[1];
    const selectedStudent = this.props.students.find(
      student => student.email === email
    );
    this.setState({ selectedStudent: selectedStudent });
  };

  componentDidMount() {
    const options = this.props.students.map(student => ({
      key: [student.name, ", ", student.email],
      text: [student.name, ", ", student.email],
      value: `${student.name}, ${student.email}`
    }));
    this.setState({ studentOptions: options });
  }

  render() {
    return (
      <div>
        <Dropdown
          onChange={this.changeStudent}
          fluid
          button
          className="icon"
          floating
          labeled
          options={this.state.studentOptions}
          search
          text="Select Student"
        />
        {this.state.selectedStudent && (
          <Messages
            messages={this.state.selectedStudent.my_messages}
            id={this.state.selectedStudent.id}
            teacherId={this.props.id}
            name={this.state.selectedStudent.name}
            teacherName={this.props.name}
            typeOfUser={this.props.typeOfUser}
            postMessageOnThePage={this.props.postMessageOnThePage}
          />
        )}
      </div>
    );
  }
}

export default MessagesTeacher;
