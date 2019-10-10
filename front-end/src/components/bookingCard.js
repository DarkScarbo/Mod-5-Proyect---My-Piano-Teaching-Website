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

  getConvenientIcons = () => {
    return this.props.booking.confirmed
      ? this.getYesOrNoIcons()
      : this.getQuestionIconOrTeacherCheckingForm();
  };

  teacherColumn = () => {
    return (
      this.props.typeOfUser === "teacher" && (
        <Grid.Column width={4}>
          <Segment>
            <p>{this.props.booking.student_name}</p>
            {this.props.booking.student_email}
          </Segment>
        </Grid.Column>
      )
    );
  };

  render() {
    return (
      <Grid padded columns="equal">
        <Grid.Row stretched>
          {this.teacherColumn()}
          <Grid.Column>
            <Segment>{this.props.booking.date}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{this.props.booking.starting}</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>{this.props.booking.ending}</Segment>
          </Grid.Column>
          <Grid.Column>{this.getConvenientIcons()}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default BookingCard;
