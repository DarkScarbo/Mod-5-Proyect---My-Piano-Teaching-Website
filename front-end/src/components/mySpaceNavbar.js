import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class MySpaceNavbar extends React.Component {
  State = {
    activeItem: ""
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div>
        <Menu attached="top" tabular>
          <Menu.Item
            as={Link}
            to="/mySpace/myBookings"
            name="My Bookings"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/mySpace/myVideos"
            name="My Videos"
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="left" />
          <Menu.Item
            as={Link}
            to="/mySpace/myMessages"
            name="My Messages"
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}

export default MySpaceNavbar;
