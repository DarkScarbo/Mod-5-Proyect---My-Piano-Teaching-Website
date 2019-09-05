import React from "react";
import { Select } from "semantic-ui-react";

const sortOptions = [
  { key: "Date", value: "Date", text: "Date" },
  { key: "Status", value: "Status", text: "Status" }
];

const SortBookingsStudent = props => (
  <Select
    placeholder="Sort by"
    options={sortOptions}
    onChange={e => props.updateSortBy(e.target.textContent)}
  />
);

export default SortBookingsStudent;
