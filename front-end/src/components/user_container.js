import React from "react";
import WelcomeUser from "./welcome_user";
import SignUpLogInForm from "./signup_login_form";

class LoginAndSignedupConteiner extends React.Component {
  render() {
    const { name, logOut } = this.props;
    return (
      <div>
        {this.props.logedIn ? (
          <WelcomeUser name={name} logOut={logOut} />
        ) : (
          <SignUpLogInForm logIn={this.props.logIn} />
        )}
      </div>
    );
  }
}

export default LoginAndSignedupConteiner;
