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
          <Link to="/about">
            <Menu.Item
              header
              name="about"
              // active={this.activeItem === "messages"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/reviews">
            <Menu.Item
              header
              name="reviews"
              // active={this.activeItem === "reviews"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/lessons">
            <Menu.Item
              header
              name="lessons"
              // active={this.activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/contact">
            <Menu.Item
              header
              name="Contact"
              // active={this.activeItem === "contact"}
              onClick={this.handleItemClick}
            />
          </Link>
          {this.props.logedIn && (
            <Link to="/mySpace">
              <Menu.Item
                header
                name="My Space"
                // active={this.activeItem === "mySpace"}
                onClick={this.handleItemClick}
              />
            </Link>
          )}
          {this.props.logedIn ? (
            <Menu.Menu position="right">
              <Menu.Item
                header
                name="Log out"
                // active={this.activeItem === "contact"}
                onClick={this.props.logOut}
              />
            </Menu.Menu>
          ) : (
            <Menu.Menu position="right" header>
              <Link to="/signuporlogin">
                <Menu.Item
                  name="Sign up or Log in"
                  // active={this.activeItem === "contact"}
                  onClick={this.handleItemClick}
                />
              </Link>
            </Menu.Menu>
          )}
        </Container>
      </Menu>
    );
  }
}
export default Navbar;

{
  /* <Menu.Menu position="right">
          <UserContainer
            logIn={this.props.logIn}
            logOut={this.props.logOut}
            logedIn={this.props.logedIn}
            name={this.props.name}
          />
        </Menu.Menu> */
}

// {
/* <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/reviews">Review</Link>
    <Link to="/lessons">Lessons</Link>
    <Link to="/contact">Contact</Link>
    {props.logedIn && <Link to="/mySpace">My Space</Link>}
    <UserContainer
      logIn={props.logIn}
      logOut={props.logOut}
      logedIn={props.logedIn}
      name={props.name}
    /> */
// }
