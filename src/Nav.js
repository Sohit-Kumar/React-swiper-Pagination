import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <>
      <div className="header">
        <a href="#">
          <h6>Live Consulation</h6>
        </a>
        <a href="#">
          <h6>Buy Plans</h6>
        </a>
        <a href="#">
          <h6>View Plans</h6>
        </a>
        <button>Log In</button>
      </div>
    </>
  );
};

export default Nav;
