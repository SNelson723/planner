import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAppSelector } from "./hooks";
import MainLayout from "./components/MainLayout";

const App = () => {
  const { token } = useAppSelector((state) => state.app);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!token ? <Login /> : <Navigate to="/home" replace />}
        />
        <Route element={token ? <MainLayout /> : <Navigate to="/" replace />}>
          <Route path="/home" element={<Home />} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
