import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setToken } from "../features/appSlice";
import { setUser } from "../features/userSlice";
import { createUser, login } from "../api/login";

const Login = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creating, setCreating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(""); // Only used when creating an account

  const handleLogin = () => {
    login(url, username, password)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          dispatch(setToken(j.access_token));
          dispatch(setUser(j.user));
        }
      })
      .catch(() => {
        alert("An error occurred while logging in. Please try again.");
      });
  };

  const handleCreateUser = () => {
    createUser(url, username, password, email)
      .then((resp) => {
        const j = resp.data;
        if (j.error == 0) {
          handleLogin();
        }
      })
      .catch(() => {
        alert(
          "An error occurred while creating the account. Please try again."
        );
      })
      .finally(() => {
        setCreating(false);
      });
  };

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key != "Enter") return;

    if (!creating) {
      handleLogin();
    } else {
      handleCreateUser();
    }
  };

  if (!creating) {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-300">
        <p className="text-2xl font-bold mb-4">Planner</p>
        <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 gap-4 w-1/6">
          <input
            className="basic-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="basic-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnterDown}
          />
          <button className="btn-themeBlue" onClick={handleLogin}>
            Login
          </button>
          <button className="btn-themeGreen" onClick={() => setCreating(true)}>
            Create Account
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-300">
        <p className="text-2xl font-bold mb-4">Create new account</p>
        <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 gap-4 w-1/6">
          <input
            className="basic-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="basic-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="basic-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnterDown}
          />
          <button className="btn-themeGreen" onClick={handleCreateUser}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
};

export default Login;
