import React from "react";
import "./App.css";
import Home from "./components/home";
import Reviews from "./components/reviews";
import About from "./components/about";
import Navbar from "./components/navbar";
import Lessons from "./components/lessons";
import Contact from "./components/contact";
import UserContainer from "./components/user_container";
import { Route, Switch, withRouter } from "react-router-dom";
import { signin } from "./services/api";

class App extends React.Component {
  state = {
    signedup: false,
    username: ""
  };

  signIn = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signin(email, password).then(user => {
      this.setState({ username: user.name });
    });
    this.setState({ signedup: true });
  };

  // signin = (user) => {
  //   this.setState({ username: user.username })
  //   localStorage.setItem('token', user.token)
  //   this.props.history.push('/inventory')
  // }

  // signout = () => {
  //   this.setState({ username: '' })
  //   localStorage.removeItem('token')
  // }

  // componentDidMount () {
  //   if (localStorage.token) {
  //     validate()
  //       .then(data => {
  //         if (data.error) {
  //           alert(data.error)
  //         } else {
  //           this.signin(data)
  //         }
  //       })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
        <UserContainer
          signIn={this.signIn}
          signedup={this.state.signedup}
          username={this.state.username}
        />
        <Switch>
          <Route exact path="/home" component={() => <Home />} />
          <Route exact path="/about" component={() => <About />} />
          <Route exact path="/lessons" component={() => <Lessons />} />
          <Route exact path="/reviews" component={() => <Reviews />} />
          <Route exact path="/contact" component={() => <Contact />} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
