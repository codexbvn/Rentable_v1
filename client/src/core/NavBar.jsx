import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="text-white py-2 bg-purple-900 px-2">
      <ul typeof="none">
        <li className="inline-block px-2 mx-1  hover:text-orange-500">
          <Link className="" to="/">
            Home
          </Link>
        </li>
        <li className="inline-block px-2 mx-1  hover:text-orange-500">
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
        <li className="inline-block px-2 mx-1  hover:text-orange-500">
          <Link className="" to="/signup">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
