import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";


const Drawer = () => {
   const [isOpen, setIsOpen] = useState(true);

   const toggleDrawer = () => {
     setIsOpen(!isOpen);
   };

   useEffect(() => {
     const mediaQuery = window.matchMedia("(max-width: 768px)");

     const handleResize = () => {
       if (mediaQuery.matches) {
         setIsOpen(false);
       } else {
         setIsOpen(true);
       }
     };

     handleResize(); // Call once on mount to set initial state
     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

  return (
    <div className={`drawer ${isOpen ? "drawer-open" : ""}`}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Navbar toggleDrawer={toggleDrawer} />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
