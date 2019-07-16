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

  handleSubmit = () => {
    const confirmed = this.state.checked;
    const id = this.props.booking.id;
    updateBooking(confirmed, id).then(newBooking =>
      this.props.updateBookingOnThePage(newBooking)
    );
  };

  getYesOrNoIcons() {
    return this.props.booking.confirmed === "Yes" ? (
      <Segment>
        <Icon name="checkmark" />
      </Segment>
    ) : (
      <Segment>
        <Icon name="close" />
      </Segment>
    );
  }

  getTeacherChekingForm = () => {
    return (
      <Segment>
        <Form onChange={this.handleSubmit}>
          <Form.Group inline>
            <Form.Field />
            <Form.Field>
              <Checkbox
                radio
                label="Yes"
                name="checkboxRadioGroup"
                value="this"
                onChange={() => this.handleChange("Yes")}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="No"
                name="checkboxRadioGroup"
                value="that"
                onChange={() => this.handleChange("No")}
              />
            </Form.Field>
          </Form.Group>
        </Form>
      </Segment>
    );
  };

  getQuestionIconOrTeacherCheckingForm = () => {
    return this.props.typeOfUser === "student" ? (
      <Segment>
        <Icon name="question" />
      </Segment>
    ) : (
      this.getTeacherChekingForm()
    );
  };

  render() {
    return (
      <Grid padded columns="equal">
        {this.props.typeOfUser === "teacher" && (
          <Grid.Column width={4}>
            {this.props.students.map(
              student =>
                student.id === this.props.booking.student_id && (
                  <Segment key={student.id}>
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
          {this.props.booking.confirmed
            ? this.getYesOrNoIcons()
            : this.getQuestionIconOrTeacherCheckingForm()}
        </Grid.Column>
      </Grid>
    );
  }
}
export default BookingCard;
