import React from "react";
import PropTypes from "prop-types";

export default function Navbar({target, navigate, children}) {
  return (
    <>
      <a 
        href={target} 
        onClick={(event) => {
          event.preventDefault();
          navigate(target);
        }}
      >
        {children}
      </a>  
    </>
  );
}

Navbar.PropTypes = {
    target: PropTypes.any.isRequired,
    navigate: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired
}