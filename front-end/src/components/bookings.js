import React, { useState } from "react";
import BookingCard from "./bookingCard";
import SortBookings from "./sortBookings";
import { Grid, Button, Form, Header, Segment } from "semantic-ui-react";
import { postBooking } from "../services/api";

const Bookings = props => {
  const [date, setDate] = useState("");
  const [starting, setStarting] = useState("");
  const [ending, setEnding] = useState("");
  const [sortBy, setSortBy] = useState("None");

  const byDate = (a, b) => a.date.localeCompare(b.date);
  const byStatus = (a, b) => a.confirmed.localeCompare(b.confirmed);
  const byStudent = (a, b) => a.student_name.localeCompare(b.student_name);

  const updateSortBy = sortType => {
    setSortBy(sortType);
  };

  // Handle sorting.

  const teacherBookings = students => {
    const bookingsArray = students.map(student =>
      sortBookings(student.my_bookings).map(booking => booking)
    );

    return bookingsArray.flat().reverse();
  };

  const sortBookings = bookings => {
    const bookingsCopy = [...bookings];

    if (sortBy === "Date") bookingsCopy.sort(byDate).reverse();
    if (sortBy === "Status") bookingsCopy.sort(byStatus).reverse();
    if (sortBy === "Student") bookingsCopy.sort(byStudent);

    return bookingsCopy;
  };

  // Handle Booking Form

  const handleChange = e => {
    if (e.target.name === "date") {
      setDate(e.target.value);
    } else if (e.target.name === "starting") {
      setStarting(e.target.value);
    } else {
      setEnding(e.target.value);
    }
  };

  const checkForm = e => {
    const dateRe = /^\d{2}-\d{2}-\d{4}$/; // Checks if the date is valid.
    const timeRe = /^\d{1,2}:\d{2}([ap]m)?$/; // Cheks if the time is valid.

    if (
      e.target.date.value.match(dateRe) &&
      e.target.starting.value.match(timeRe) &&
      e.target.ending.value.match(timeRe)
    ) {
      return true;
    } else {
      return false;
    }
  };

  const resetStateValues = () => {
    setDate("");
    setStarting("");
    setEnding("");
  };

  const getCurrentDate = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    const newToday = dd + "-" + mm + "-" + yyyy;
    return newToday;
  };

  const getCurrentTime = () => {
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes();
    return time;
  };

  const checkDate = e => {
    const currentDate = getCurrentDate()
      .split("-")
      .reverse()
      .join("-");
    const dateReversed = e.target.date.value
      .split("-")
      .reverse()
      .join("-");
    const checkDate =
      currentDate.localeCompare(dateReversed) === -1 ||
      (currentDate.localeCompare(dateReversed) === 0 &&
        getCurrentTime().localeCompare(e.target.starting.value) === -1); // Checks if date and time are not in the past.

    return checkDate;
  };

  const checkTime = e => {
    return e.target.starting.value.localeCompare(e.target.ending.value) === -1; // Cheks if the end time is after the start time.
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkForm(e) && checkDate(e) && checkTime(e)) {
      const confirmed = "";
      const student_name = props.name;
      const student_email = props.email;
      const student_id = props.id;

      postBooking(
        date,
        starting,
        ending,
        confirmed,
        student_id,
        student_name,
        student_email
      ).then(booking => props.postBookingOnThePage(booking));
    } else {
      alert("Invalid date or time input.");
      resetStateValues();
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
          <Segment tertiary>Starting Time</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment tertiary>Ending time</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment tertiary>Status</Segment>
        </Grid.Column>
      </Grid>
      {props.typeOfUser === "student"
        ? sortBookings(props.bookings).map((booking, index) => (
            <BookingCard
              key={index}
              booking={booking}
              typeOfUser={props.typeOfUser}
            />
          ))
        : sortBookings(teacherBookings(props.students)).map(
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
