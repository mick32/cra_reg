import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router";

const adminLogin = "admin";
const adminPassword = "123";

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

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      login: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ login: value });
  }

  handlePassChange({ target: { value } }) {
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { login, password } = this.state;

    if (login === adminLogin && password === adminPassword) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
      alert("Логин неверный");
    }
  }

  render() {
    const { isLogin } = this.state;

    if (isLogin) {
      return <Redirect to="/news/" />;
    }

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
          <Button type="submit">Log in</Button>
        </Form>
      </Main>
    );
  }
}
