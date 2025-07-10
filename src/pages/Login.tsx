import { useAppDispatch, useAppSelector } from "../hooks";
import { setToken } from "../features/appSlice";

const Login = () => {
  const dispatch = useAppDispatch();
  const { url } = useAppSelector((state) => state.app);

  return(
    <div>
      <div>Login Page</div>
      <div>
        <input className="basic-input" placeholder="Username" />
        <input className="basic-input" type="password" placeholder="Password" />
      </div>
    </div>
  )
}

export default Login;