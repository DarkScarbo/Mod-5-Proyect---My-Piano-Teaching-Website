import React from "react";
import { logInApi, signUpApi } from "../services/api";
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment
} from "semantic-ui-react";

class SignUpLogInForm extends React.Component {
  state = {
    logStatus: false
  };

  changeLogStatus = () => {
    this.setState({ logStatus: !this.state.logStatus });
  };

  handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (this.state.logStatus === false) {
      logInApi(email, password).then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.props.logIn(data);
        }
      });
    } else {
      const name = e.target.username.value;
      const passwordConfirmation = e.target.password_confirmation.value;
      if (password === passwordConfirmation) {
        signUpApi(name, email, password).then(data => {
          if (data.error) {
            alert(data.error);
          } else {
            logInApi(email, password).then(data => {
              if (data.error) {
                alert(data.error);
              } else {
                this.props.logIn(data);
              }
            });
          }
        });
      } else {
        alert("Your passwords don't match!");
      }
    }
  };

  render() {
    return (
      // <div>
      //   {this.state.logStatus ? (
      //     <button onClick={this.changeLogStatus}>Or Log In</button>
      //   ) : (
      //     <button onClick={this.changeLogStatus}>Or Sign Up</button>
      //   )}
      //   <form onSubmit={this.handleSubmit} name="form">
      //     {this.state.logStatus && (
      //       <div>
      //         <label htmlFor="username">User name</label>
      //         <input
      //           type="text"
      //           name="username"
      //           required
      //           // onChange={this.handleChange}
      //         />
      //       </div>
      //     )}
      //     <div>
      //       <label htmlFor="email">Email</label>
      //       <input
      //         type="text"
      //         name="email"
      //         required
      //         // onChange={this.handleChange}
      //       />
      //     </div>
      //     <div>
      //       <label htmlFor="password">Password</label>
      //       <input
      //         type="password"
      //         name="password"
      //         // onChange={this.handleChange}
      //       />
      //     </div>
      //     {this.state.logStatus && (
      //       <div>
      //         <label htmlFor="password_confirmation">
      //           Password Confirmation
      //         </label>
      //         <input
      //           type="password"
      //           name="password_confirmation"
      //           // onChange={this.handleChange}
      //         />
      //       </div>
      //     )}
      //     <div>
      //       {this.state.logStatus ? (
      //         <button>Signup</button>
      //       ) : (
      //         <button>Login</button>
      //       )}
      //     </div>
      //   </form>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <Icon name="music" /> Access your account!
          </Header>
          <Form size="large" onSubmit={this.handleSubmit}>
            <Segment stacked>
              {this.state.logStatus && (
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  name="username"
                  required
                />
              )}
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                required
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
              />
              {this.state.logStatus && (
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  name="password_confirmation"
                />
              )}
              {this.state.logStatus ? (
                <Button color="blue" fluid size="large">
                  Sign Up
                </Button>
              ) : (
                <Button color="blue" fluid size="large">
                  Log in
                </Button>
              )}
            </Segment>
          </Form>
          <Message>
            {this.state.logStatus ? (
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.changeLogStatus}
              >
                Or Log In
              </Button>
            ) : (
              <Button
                color="teal"
                fluid
                size="large"
                onClick={this.changeLogStatus}
              >
                Or Sign Up
              </Button>
            )}
          </Message>
        </Grid.Column>
      </Grid>
      // </div>
    );
  }
}

export default SignUpLogInForm;
