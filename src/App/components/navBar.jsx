import React from "react";
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (<ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/posts">Posts</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </ul>)
}

export default NavBar