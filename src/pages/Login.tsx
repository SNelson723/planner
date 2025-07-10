import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setToken } from "../features/appSlice";
import { setUser } from "../features/userSlice";
import { login } from "../api/login";

const Login = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [creating, setCreating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(""); // Only used when creating an account

  const handleLogin = () => {
    // Handle login logic here
    login(url, username, password)
      .then((resp) => {
        const j = resp.data;
        console.log("Login response:", j);
        if (j.error == 0) {
          dispatch(setToken(j.access_token));
          dispatch(setUser(j.user));
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("An error occurred while logging in. Please try again.");
      });
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
          />
          <button className="btn-themeGreen" onClick={() => setCreating(false)}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
};

export default Login;
