import React, { useState } from "react";
import BookingCard from "./bookingCard";
import SortBookings from "./sortBookings";
import { Grid, Button, Form, Header, Segment } from "semantic-ui-react";
import { postBooking } from "../services/api";
import { checks } from "../bus-logic/bookings_bl";
import { sortBookings, teacherBookings } from "../bus-logic/bookings_bl";

const Bookings = props => {
  const [date, setDate] = useState("");
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");
  const [sortBy, setSortBy] = useState("None");
  const [confirmed] = useState("");
  const [student_id] = useState(props.id);
  const [student_name] = useState(props.name);
  const [student_email] = useState(props.email);

  // Handle sorting.

  const updateSortBy = sortType => {
    setSortBy(sortType);
  };

  // Handle Booking Form.

  const handleChange = e => {
    if (e.target.name === "date") {
      setDate(e.target.value);
    } else if (e.target.name === "starting") {
      setStarting(e.target.value);
    } else {
      setEnding(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checks(date, starting, ending)) {
      postBooking(
        date,
        starting,
        ending,
        confirmed,
        student_id,
        student_name,
        student_email
      ).then(response => {
        if (response.errors) {
          console.log(response);
        } else {
          props.postBookingOnThePage(response);
        }
      });
    } else {
      alert("Invalid date or time input.");
    }
  };

  return (
    <div>
      {props.bookings && (
        <Segment>
          <Header as="h3" dividing>
            Bookings
          </Header>
          <Form widths="equal" onSubmit={handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                label="Date"
                name="date"
                placeholder="dd-mm-yyyy"
                iconPosition="left"
                value={date}
                onChange={handleChange}
                required
              />
              <Form.Input
                label="Start Time"
                name="starting"
                placeholder="hh:mm"
                iconPosition="left"
                value={starting}
                onChange={handleChange}
                required
              />
              <Form.Input
                label="End Time"
                name="ending"
                placeholder="hh:mm"
                iconPosition="left"
                value={ending}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button color="blue">Submit</Button>
          </Form>
        </Segment>
      )}
      <SortBookings updateSortBy={updateSortBy} typeOfUser={props.typeOfUser} />
      <Grid padded columns="equal">
        {props.typeOfUser === "teacher" && (
          <Grid.Column width={4}>
            <Segment tertiary>Student</Segment>
          </Grid.Column>
        )}
        <Grid.Column>
          <Segment tertiary>Date</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment tertiary>Start Time</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment tertiary>End time</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment tertiary>Status</Segment>
        </Grid.Column>
      </Grid>
      {props.typeOfUser === "student"
        ? sortBookings(props.bookings, sortBy).map((booking, index) => (
            <BookingCard
              key={index}
              booking={booking}
              typeOfUser={props.typeOfUser}
            />
          ))
        : sortBookings(teacherBookings(props.students), sortBy).map(
            (booking, index) => (
              <BookingCard
                key={index}
                booking={booking}
                typeOfUser={props.typeOfUser}
                updateBookingOnThePage={props.updateBookingOnThePage}
              />
            )
          )}
    </div>
  );
};

export default Bookings;
