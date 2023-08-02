import {Routes, Route} from "react-router-dom";
import NavBar from "./components/navBar";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Stats from "./components/stats";
import Post from "./components/Post";
import PostList from "./components/postList";


const posts = [
    {id: 1, label: 'post 1'},
    {id: 2, label: 'post 2'},
    {id: 3, label: 'post 3'}
]

function App() {

    return (
        <div>
            <NavBar/>
            <h1>App</h1>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route
                    path="/posts/:postId"
                    element={<Post posts={posts}/>}/>

                <Route
                    path="/posts"
                    element={<PostList posts={posts}/>}/>

                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard/stats" element={<Stats/>}/>
            </Routes>
        </div>
    );
}

export default App;