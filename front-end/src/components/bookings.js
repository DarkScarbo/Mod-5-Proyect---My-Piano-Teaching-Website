import React from "react";
import BookingCard from "./bookingCard";
import { DateInput, TimeInput } from "semantic-ui-calendar-react";
import { Button, Form } from "semantic-ui-react";
import { postBooking } from "../services/api";
import { Grid, Segment } from "semantic-ui-react";

class Bookings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      starting: "",
      ending: ""
    };
  }
  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const date = this.state.date;
    const starting = this.state.starting;
    const ending = this.state.ending;
    const confirmed = "";
    const creator_id = this.props.id;
    const student_id = this.props.id;
    postBooking(date, starting, ending, confirmed, creator_id, student_id).then(
      booking => this.props.postBookingOnThePage(booking)
    );
  };

  render() {
    return (
      <div>
        {this.props.bookings && (
          <Form onSubmit={this.handleSubmit}>
            <DateInput
              name="date"
              placeholder="Date"
              iconPosition="left"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <TimeInput
              name="starting"
              placeholder="Starting Time"
              iconPosition="left"
              value={this.state.starting}
              onChange={this.handleChange}
            />
            <TimeInput
              name="ending"
              placeholder="Ending Time"
              iconPosition="left"
              value={this.state.ending}
              onChange={this.handleChange}
            />
            <Button>Submit</Button>
          </Form>
        )}
        <Grid columns="equal">
          {this.props.typeOfUser === "teacher" && (
            <Grid.Column width={4}>
              <Segment>Student</Segment>
            </Grid.Column>
          )}
          <Grid.Column>
            <Segment>Date</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Starting Time</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Ending time</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Confirmed?</Segment>
          </Grid.Column>
        </Grid>
        {this.props.typeOfUser === "student"
          ? this.props.bookings.map((booking, index) => (
              <BookingCard key={index} booking={booking} />
            ))
          : this.props.students.map(student =>
              student.my_bookings.map((booking, index) => (
                <BookingCard
                  students={this.props.students}
                  key={index}
                  booking={booking}
                  typeOfUser={this.props.typeOfUser}
                  updateBookingOnThePage={this.props.updateBookingOnThePage}
                />
              ))
            )}
      </div>
    );
  }
}

export default Bookings;
