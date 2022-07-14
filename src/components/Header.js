import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <nav className="nav nav-pills nav-justified">
      <Link className="nav-link active"  to="/">
        {props.title}
      </Link>
      <Link className="nav-link" to="/About">
        About
      </Link>
    </nav>
  );
}

Header.defaultProps = {
  title: "Your title here",
};

Header.propTypes = {
  title: PropTypes.string,
};
