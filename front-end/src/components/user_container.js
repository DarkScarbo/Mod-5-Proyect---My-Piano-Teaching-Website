import React from "react";
import WelcomeUser from "./welcome_user";
import SignUpLogInForm from "./signup_login_form";

class LoginAndSignedupConteiner extends React.Component {
  state = {
    email: "",
    password: ""
  };

  // handleSubmit = () => {
  //   signin(this.state.username, this.state.password).then(data => {
  //     if (data.error) {
  //       alert(data.error);
  //     } else {
  //       this.props.signin(data);

  //     }
  //   });
  // };

  // handleChange = event =>
  //   this.setState({ [event.target.name]: event.target.value });
  render() {
    const { userName, logOut } = this.props;
    return (
      <div>
        {this.props.logedIn ? (
          <WelcomeUser userName={userName} logOut={logOut} />
        ) : (
          <SignUpLogInForm logIn={this.props.logIn} />
        )}
      </div>
    );
  }
}

export default LoginAndSignedupConteiner;
