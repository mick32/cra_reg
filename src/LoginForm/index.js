import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NameForm = styled.h1`
  color: #000;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 0px 10px;
  margin-bottom: 10px;
`;

const PasswordInput = styled.input`
  width: 200px;
  height: 20px;
  padding: 0px 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 80px;
  background-color: #f7f6f6;
  color: #000;
`;

const login = "Admin";
const password = "12345";

export default class LoginForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isLogin: false,
      login: "",
      pass: ""
    };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handlePassChange(e) {
    this.setState({ pass: e.target.value });
  }

  login = () => {
    if (this.state.login === login && this.state.pass === password) {
      this.setState({ isLogin: true });
    }
  };

  handleSubmit(event) {
    if (this.state.login === login && this.state.pass === password) {
      this.setState({ isLogin: true });
      alert("Hello " + this.state.login);
      event.preventDefault();
    } else {
      this.setState({ isLogin: false });
      alert("Логин неверный");
      event.preventDefault();
    }
  }

  render() {
    return (
      <Main>
        <Form onSubmit={this.handleSubmit}>
          <NameForm>Login</NameForm>
          <LoginInput
            type="text"
            placeholder="Login"
            onChange={this.handleChange}
          />
          <PasswordInput
            type="password"
            placeholder="Password"
            onChange={this.handlePassChange}
          />
          <Button type="submit" onClick={this.login}>
            {" "}
            Log in{" "}
          </Button>
        </Form>
      </Main>
    );
  }
}
