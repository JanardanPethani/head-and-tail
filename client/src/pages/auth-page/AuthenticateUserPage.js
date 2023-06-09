import React, { useState } from "react";
import { login, signUp } from "../../services/user-services";
import { useNavigate } from "react-router-dom";
import "./AuthenticateUserPage.css";

function AuthenticateUserPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onValueChange(e, isEmail) {
    if (isEmail) {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();
    if (isSignUp) {
      let res = await signUp(email, password);
      if (res) {
        navigate("/home", {
          replace: true,
        });
      }
    } else {
      let res = await login(email, password);
      if (res) {
        navigate("/home", {
          replace: true,
        });
      }
    }
  }

  return (
    <div className="ht-auth-form">
      <div>{!isSignUp ? "Log in" : "Sign up"}</div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            onValueChange(e, true);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            onValueChange(e, false);
          }}
        />
        <input type="submit" value={"Submit"} />
      </form>
      <button href="#" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Go to Log in" : "Go to Sign up"}
      </button>
    </div>
  );
}

export default AuthenticateUserPage;
