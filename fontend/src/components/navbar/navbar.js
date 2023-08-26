import { React } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-size">
      <div className="navbar-left">
        <Link to="/home">
          <h3 className="navbar-h3">BICICLETAS</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
