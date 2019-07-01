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
    const { username } = this.props;
    const { email, password } = this.state;
    return (
      <div>
        {this.props.signedup ? (
          <WelcomeUser username={username} />
        ) : (
          <SignUpLogInForm
            signIn={this.props.signIn}
            username={username}
            email={email}
            password={password}
          />
        )}
      </div>
    );
  }
}

export default LoginAndSignedupConteiner;
