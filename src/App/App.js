import {Routes, Route, Navigate} from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Stats from "./components/stats";
import Posts from "./components/posts";
import NotFound from "./components/not-found";




function App() {

    return (
        <div>
            <NavBar/>
            <h1>App</h1>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>

                <Route path="/posts/:postId?" element={<Posts/>}/>

                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard/stats" element={<Stats/>}/>
                <Route path="/404" element={<NotFound/>}/>
                <Route path="*" element={<Navigate to= "/404"/> }/>
            </Routes>
        </div>
    );
}

export default App;