import {Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Posts from "./components/posts";
import NotFound from "./components/not-found";
import Stats from "./components/stats";
import Edit from "./components/Edit";
import React from "react";


function App() {

    return (
        <div>
            <NavBar/>
            <h1>App</h1>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard/*" element={<Dashboard/>}>
                    <Route index element={<Stats/>}/>
                    <Route path="edit" element={<Edit/>}/>
                </Route>
                <Route path="/login" element={<Login/>}/>
                <Route path="/posts/:postId?" element={<Posts/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to="/404"/>}/>
            </Routes>
        </div>
    );
}

export default App;