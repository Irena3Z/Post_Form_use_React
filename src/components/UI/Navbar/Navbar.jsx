import React from "react";
import { Link } from "react-router-dom";
import About from "../../../pages/About";
import Posts from "../../../pages/Posts";


const Navbar = () => {
    return(
        <div className="navbar">
        <div className="navbar__links">
           <Link className="links" to="/about">About</Link>
           <Link className="links" to="/posts">Posts</Link>
         </div>
        
       </div>
    );
};

export default Navbar;