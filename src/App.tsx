import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks";

const App = () => {
  const { token } = useAppSelector((state) => state.app);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!token ? <Login /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
