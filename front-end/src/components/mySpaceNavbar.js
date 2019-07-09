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
          <Link to="/mySpace/myBookings">
            <Menu.Item name="My Bookings" onClick={this.handleItemClick} />
          </Link>
          <Link to="/mySpace/myVideos">
            <Menu.Item name="My Videos" onClick={this.handleItemClick} />
          </Link>
          <Menu.Menu position="left" />
          <Link to="/mySpace/myMessages">
            <Menu.Item name="My Messages" onClick={this.handleItemClick} />
          </Link>
        </Menu>
      </div>
    );
  }
}

export default MySpaceNavbar;
