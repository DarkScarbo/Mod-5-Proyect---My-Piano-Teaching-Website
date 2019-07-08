import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const BookingCard = props => (
  <Grid columns="equal">
    <Grid.Column>
      <Segment>{props.booking.date}</Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>{props.booking.starting}</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>{props.booking.ending}</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
);
export default BookingCard;
