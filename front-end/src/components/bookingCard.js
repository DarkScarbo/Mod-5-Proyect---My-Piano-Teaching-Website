import React from "react";
import { Grid, Segment, Icon, Form, Checkbox } from "semantic-ui-react";
import { updateBooking } from "../services/api";

class BookingCard extends React.Component {
  state = {
    checked: ""
  };

  handleChange = change => {
    this.setState({ checked: change }, () => {
      this.handleSubmit();
    });
  };

  handleSubmit = e => {
    const confirmed = this.state.checked;
    const id = this.props.booking.id;
    updateBooking(confirmed, id).then(newBooking =>
      this.props.updateBookingOnThePage(newBooking)
    );
  };

  // getUserSegment() {
  //   if
  // }

  render() {
    return (
      <Grid columns="equal">
        {this.props.typeOfUser === "teacher" && (
          <Grid.Column width={4}>
            {this.props.students.map(
              student =>
                student.id === this.props.booking.student_id && (
                  <Segment>
                    {student.name} {student.email}
                  </Segment>
                )
            )}
          </Grid.Column>
        )}
        <Grid.Column>
          <Segment>{this.props.booking.date}</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>{this.props.booking.starting}</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>{this.props.booking.ending}</Segment>
        </Grid.Column>
        <Grid.Column>
          {this.props.booking.confirmed ? (
            this.props.booking.confirmed === "Yes" ? (
              <Segment>
                <Icon name="checkmark" />
              </Segment>
            ) : (
              <Segment>
                <Icon name="close" />
              </Segment>
            )
          ) : this.props.typeOfUser === "student" ? (
            <Segment>
              <Icon name="question" />
            </Segment>
          ) : (
            <Segment>
              <Form onChange={this.handleSubmit}>
                <Form.Group inline>
                  <Form.Field>
                    {/* Selected value: <b>{this.state.value}</b> */}
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label="Yes"
                      name="checkboxRadioGroup"
                      value="this"
                      // checked={this.state.checked}
                      onChange={() => this.handleChange("Yes")}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      radio
                      label="No"
                      name="checkboxRadioGroup"
                      value="that"
                      // checked={!this.state.checked}
                      // checked={this.state.value === "that"}
                      onChange={() => this.handleChange("No")}
                    />
                  </Form.Field>
                </Form.Group>
              </Form>
            </Segment>
          )}
        </Grid.Column>
      </Grid>
    );
  }
}
export default BookingCard;
