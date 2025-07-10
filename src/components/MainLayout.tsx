// components/MainLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
