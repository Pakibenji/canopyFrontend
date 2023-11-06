import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/register")}>Register</button>
          </li>
          <li>
            <button onClick={() => navigate("/login")}>Login</button>
          </li>
          <li>
            <button onClick={() => navigate("/userInfo")}>User</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
