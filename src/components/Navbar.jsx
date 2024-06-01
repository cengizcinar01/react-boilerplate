import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return (
    <>
      {isAuth ? (
        <div>
          <NavLink to="/dashboard">
            <span>Dashboard</span>
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink to="/login">
            <span>Login</span>
          </NavLink>
          <NavLink to="/register">
            <span>Register</span>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
