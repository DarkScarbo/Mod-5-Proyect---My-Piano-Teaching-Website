import React from "react";
import SignUpLogInForm from "./signup_login_form";

class LoginAndSignedupConteiner extends React.Component {
  render() {
    return (
      <div>
        <SignUpLogInForm logIn={this.props.logIn} />
      </div>
    );
  }
}

export default LoginAndSignedupConteiner;
