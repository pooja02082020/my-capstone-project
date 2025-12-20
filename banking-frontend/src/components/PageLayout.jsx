import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function PageLayout({ title, children }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <div className="app-main">
        <Navbar title={title} />
        <div className="page">{children}</div>
      </div>
    </div>
  );
}
