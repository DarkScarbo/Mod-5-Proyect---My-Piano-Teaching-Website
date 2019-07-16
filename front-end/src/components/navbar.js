import React from "react";
import { Link } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {
    activeItem: "home"
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <Menu
        inverted
        color="blue"
        secondary
        style={{ marginTop: 50, marginBottom: 50 }}
      >
        <Container>
          <Menu.Item
            as={Link}
            to="/about"
            header
            name="about"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/reviews"
            header
            name="reviews"
            onClick={this.handleItemClick}
          />

          <Menu.Item
            as={Link}
            to="/lessons"
            header
            name="lessons"
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/contact"
            header
            name="Contact"
            onClick={this.handleItemClick}
          />
          {this.props.logedIn && (
            <Menu.Item
              as={Link}
              to="/mySpace"
              header
              name="My Space"
              onClick={this.handleItemClick}
            />
          )}
          {this.props.logedIn ? (
            <Menu.Menu position="right">
              <Menu.Item header name="Log out" onClick={this.props.logOut} />
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right" header="true">
              <Menu.Item
                as={Link}
                to="/signuporlogin"
                name="Sign up or Log in"
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          )}
        </Container>
      </Menu>
    );
  }
}
export default Navbar;
