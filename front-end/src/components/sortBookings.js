import React from "react";
import { Select } from "semantic-ui-react";

const TeacherSortOptions = [
  { key: "Date", value: "Date", text: "Date" },
  { key: "Status", value: "Status", text: "Status" },
  { key: "Student", value: "Student", text: "Student" }
];

const StudentsortOptions = [
  { key: "Date", value: "Date", text: "Date" },
  { key: "Status", value: "Status", text: "Status" }
];

const SortBookingsTeacher = props => (
  <Select
    placeholder="Sort by"
    options={
      props.typeOfUser === "student" ? StudentsortOptions : TeacherSortOptions
    }
    onChange={e => props.updateSortBy(e.target.textContent)}
  />
);

export default SortBookingsTeacher;
