import React from "react";
import { Grid, Segment, Icon } from "semantic-ui-react";

const BookingCard = props => (
  <Grid columns="equal">
    <Grid.Column>
      <Segment>{props.booking.date}</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>{props.booking.starting}</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>{props.booking.ending}</Segment>
    </Grid.Column>
    <Grid.Column>
      {props.booking.confirmed ? (
        props.booking.confirmed === "Yes" ? (
          <Segment>
            <Icon name="checkmark" />
          </Segment>
        ) : (
          <Segment>
            <Icon name="close" />
          </Segment>
        )
      ) : (
        <Segment>
          <Icon name="question" />
        </Segment>
      )}
    </Grid.Column>
  </Grid>
);
export default BookingCard;
