import React from "react";
import StudentsDropdownForTecherMessages from "./studentsDropdownForTecherMessages";

class MessagesTeacher extends React.Component {
  render() {
    return (
      <div>
        <StudentsDropdownForTecherMessages
          students={this.props.students}
          postMessageOnThePage={this.props.postMessageOnThePage}
          name={this.props.name}
          id={this.props.id}
        />
      </div>
    );
  }
}

export default MessagesTeacher;
