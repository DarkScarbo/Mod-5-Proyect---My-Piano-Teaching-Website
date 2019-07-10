import React from "react";
import "./App.css";
import Home from "./components/home";
import Reviews from "./components/reviews";
import About from "./components/about";
import Navbar from "./components/navbar";
import Lessons from "./components/lessons";
import Contact from "./components/contact";
import MySpace from "./components/my_space";
import UserContainer from "./components/user_container";
import { Route, Switch, withRouter } from "react-router-dom";
import { validate } from "./services/api";

class App extends React.Component {
  state = {
    logedIn: false,
    name: "",
    id: null,
    typeOfUser: ""
  };

  componentDidMount() {
    this.props.history.push("/about");
    if (localStorage.token) {
      validate().then(user => {
        if (user.error) {
          alert(user.error);
        } else {
          this.logIn(user);
        }
      });
    }
  }

  logIn = user => {
    this.setState({
      name: user.name,
      logedIn: true,
      id: user.id,
      typeOfUser: user.typeOfUser
    });
    this.props.history.push("/mySpace");
    localStorage.setItem("token", user.token);
  };

  logOut = () => {
    this.setState({ name: "", logedIn: false });
    this.props.history.push("/about");
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="App">
        <Navbar
          logedIn={this.state.logedIn}
          logIn={this.logIn}
          logOut={this.logOut}
          name={this.state.name}
        />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/lessons" component={() => <Lessons />} />
          <Route exact path="/reviews" component={() => <Reviews />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route
            exact
            path="/signuporlogin"
            component={() => (
              <UserContainer
                logIn={this.logIn}
                logOut={this.logOut}
                logedIn={this.state.logedIn}
                name={this.state.name}
              />
            )}
          />

          <Route
            path="/mySpace"
            component={props => (
              <MySpace
                name={this.state.name}
                id={this.state.id}
                typeOfUser={this.state.typeOfUser}
                {...props}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
