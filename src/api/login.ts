import axios from "axios";

export const login = async (
  url: string,
  username: string,
  password: string
) => {
  const json = axios({
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    url: url + "auth/login",
    data: {
      username,
      password,
    },
  });
  return json;
};

export const createUser = async (
  url: string,
  username: string,
  password: string,
  email: string
) => {
  const json = axios({
    method: "POST",
    headers: { "Content-Type": "application/json" },
    url: url + "auth/create",
    data: {
      username,
      password,
      email,
    },
  });
  return json;
};
