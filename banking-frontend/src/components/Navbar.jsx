import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const { user, role } = useSelector((s) => s.auth);

  //COMMON NAVBAR FOR ALL EMPLOYEES, CUTOMERS AND ADMINS
  return (
    <header className="topbar">
      <div className="topbarLeft">
        <div className="brandDot" />
        <div>
          <div className="brandTitle">Banking Management</div>
          <div className="brandSubtitle">Role-based SPA</div>
        </div>
      </div>

      <div className="topbarRight">
        <div className="userChip">
          <div className="avatar">{(user?.name?.[0] || "U").toUpperCase()}</div>
          <div className="userMeta">
            <div className="userName">{user?.name || "User"}</div>
            <div className="userRole">{role}</div>
          </div>
        </div>

        <button className="btnGhost" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </header>
  );
}
