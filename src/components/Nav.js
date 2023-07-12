import React from "react";
import { Link } from "react-router-dom";
export const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/super"> 
            <li>Super</li>
          </Link>
          {/* <Link>
            <li></li>
          </Link> */}
        </ul>
      </nav>
    </>
  );
};
