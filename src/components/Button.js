import React from "react";
import { Link } from "react-router-dom"
function Button({ name, link, icon }) {
  return (
    <Link to={link} className="flex items-center">
      <button className="px-4 py-2 text-sm leading-5 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none flex justify-between text-center">
        {icon && icon} {name}
      </button>
    </Link>
  );
}

export default Button;
