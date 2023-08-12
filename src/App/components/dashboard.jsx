import React from "react";
import {Route, Routes, NavLink, Outlet} from "react-router-dom";
import Stats from "./stats";
import Edit from "./Edit";

const Dashboard = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="edit">Edit</NavLink>
                </li>
            </ul>
<Outlet/>
            {/*<Routes>*/}
            {/*    <Route path="/" element={<Stats />} />*/}
            {/*    <Route path="edit" element={<Edit />} />*/}
            {/*</Routes>*/}
        </div>
    );
};

export default Dashboard;