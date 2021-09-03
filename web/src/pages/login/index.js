import React, { useState, useEffect } from "react";
import Auth from "../../services/AuthService";
import { useHistory } from "react-router-dom";

import {
  Container,
  LoginForm,
  FormSection,
  BottomLabel,
  SignUpLink,
  SubmitButton,
  InputField,
  Logo,
  WelcomeText,
} from "./login-styling";

function Login() {
  const history = useHistory(); // router

  // Form Variables
  const [email, setEmail] = useState(""); //  const [login, setLogin] --> notion
  const [password, setPassword] = useState("");

  // Status Variables
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const user = Auth.isLogged();
    if (user) setSuccess(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    // this will determine whether we go to /admin or /user page
    let isAdmin = false;
    if (password) isAdmin = true;

    const res = await Auth.logInUser(email, password);

    console.log(res);

    if (!res) setError(true);
    else setSuccess(true);
  };

  return (
    <Container>
      <LoginForm>
        <WelcomeText>Welcome to</WelcomeText>
        <Logo />
        <FormSection onSubmit={onSubmit}>
          <InputField
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <SubmitButton
            onClick={() => history.push("/dashboard")}
            type="submit"
          >
            Sign In
          </SubmitButton>
        </FormSection>
        <BottomLabel>
          Don't have an account? <SignUpLink to="#">Sign Up</SignUpLink> now!
        </BottomLabel>
      </LoginForm>
    </Container>
  );
}

export default Login;
