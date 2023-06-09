import axios from "axios";

const api = process.env.REACT_APP_API;

export async function login(email, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let res = await axios.post(
      api + "/api/user/login",
      {
        email,
        password,
      },
      config
    );
    localStorage.setItem("access-token", res.token);
    return res;
  } catch (errors) {
    return null;
  }
}

export async function signUp(email, password) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    let res = await axios.post(
      api + "/api/user/signup",
      {
        email,
        password,
      },
      config
    );
    localStorage.setItem("access-token", res.token);
    return res;
  } catch (errors) {
    alert("Error while sign up | user is already registred");
    return null;
  }
}
