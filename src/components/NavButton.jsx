import { NavLink } from "react-router-dom";

export default function NavButton({ to, children }) {
  return (
    <div className="w-full md:w-auto">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        {children}
      </NavLink>
    </div>
  );
}
