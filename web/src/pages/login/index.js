import React, { useState, useEffect } from "react";
import Auth from "../../services/AuthService";
import { Redirect } from "react-router-dom";

export default function Login() {
  // Form Variables
  const [userName, setUserName] = useState(""); //  const [login, setLogin] --> notion
  const [password, setPassword] = useState("");

  // State Variables
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  /**
   * função que é executada no início do componente, para
   * verificar se o usuário já não está logado, se estiver,
   *  redirecionamos para a página /user  (/private, no Notion)
   */
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

  return <></>;
}
