import React, { useState, useEffect } from "react";
import Auth from "../../services/AuthService";
import { Redirect } from "react-router-dom";

import {
  Container,
  LoginForm,
  LogoSection,
  FormSection,
  BottomLabel,
  SignUpLink,
} from "./login-styling";

function Login() {
  // Form Variables
  const [userName, setUserName] = useState(""); //  const [login, setLogin] --> notion
  const [password, setPassword] = useState("");

  // State Variables
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

    const res = await Auth.logInUser(userName, password, isAdmin);

    console.log(res);

    if (!res) setError(true);
    else setSuccess(true);
  };

  return (
    <>
      <Container>
        <LoginForm>
          <LogoSection></LogoSection>
          <FormSection></FormSection>
          <BottomLabel>
            Don't have an account? <SignUpLink to="#">Sign Up</SignUpLink> now!
          </BottomLabel>
        </LoginForm>
      </Container>
    </>
  );
}

export default Login;
