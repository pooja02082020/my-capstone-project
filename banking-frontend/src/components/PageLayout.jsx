import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

export default function PageLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-right">
        <Navbar />
        <div className="layout-content">{children}</div>
      </div>
    </div>
  );
}
