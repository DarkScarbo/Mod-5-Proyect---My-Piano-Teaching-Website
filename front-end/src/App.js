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
import { logInApi } from "./services/api";

class App extends React.Component {
  state = {
    logedIn: false,
    userName: "",
    userId: ""
  };

  logIn = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    logInApi(email, password).then(user => {
      if (user.error) {
        alert(user.error);
      } else {
        this.setState({ userName: user.name });
        this.setState({ logedIn: true });
        this.props.history.push("/mySpace");
      }
    });
  };

  logOut = () => {
    this.setState({ userName: "" });
    this.setState({ logedIn: false });
    this.props.history.push("/");
  };

  // login = (user) => {
  //   this.setState({ userName: user.userName })
  //   localStorage.setItem('token', user.token)
  //   this.props.history.push('/inventory')
  // }

  // logout = () => {
  //   this.setState({ userName: '' })
  //   localStorage.removeItem('token')
  // }

  // componentDidMount () {
  //   if (localStorage.token) {
  //     validate()
  //       .then(data => {
  //         if (data.error) {
  //           alert(data.error)
  //         } else {
  //           this.login(data)
  //         }
  //       })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Navbar logedIn={this.state.logedIn} />
        <UserContainer
          logIn={this.logIn}
          logOut={this.logOut}
          logedIn={this.state.logedIn}
          userName={this.state.userName}
        />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/lessons" component={() => <Lessons />} />
          <Route exact path="/reviews" component={() => <Reviews />} />
          <Route exact path="/contact" component={() => <Contact />} />
          <Route exact path="/mySpace" component={() => <MySpace />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
