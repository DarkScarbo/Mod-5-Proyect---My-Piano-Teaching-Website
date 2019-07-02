import React from "react";
import "./App.css";
import Home from "./components/home";
import Reviews from "./components/reviews";
import About from "./components/about";
import Navbar from "./components/navbar";
import Lessons from "./components/lessons";
import Contact from "./components/contact";
import UserContainer from "./components/user_container";
import MySpace from "./components/my_space";
import { Route, Switch, withRouter } from "react-router-dom";
import { validate } from "./services/api";

class App extends React.Component {
  state = {
    logedIn: false,
    name: ""
  };

  componentDidMount() {
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
    debugger;
    this.setState({ name: user.name });
    this.setState({ logedIn: true });
    this.props.history.push("/mySpace");
    localStorage.setItem("token", user.token);
    debugger;
  };

  logOut = () => {
    this.setState({ name: "" });
    this.setState({ logedIn: false });
    this.props.history.push("/");
    localStorage.removeItem("token");
  };

  render() {
    return (
      <div className="App">
        <Navbar logedIn={this.state.logedIn} />
        <UserContainer
          logIn={this.logIn}
          logOut={this.logOut}
          logedIn={this.state.logedIn}
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
            path="/mySpace"
            component={props => <MySpace name={this.state.name} {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
