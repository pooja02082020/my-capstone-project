import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/dashboard.css";

export default function PageLayout() {
  return (
    <div className="appShell">
      <Sidebar />
      <div className="appMain">
        <Navbar />
        <main className="appContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
