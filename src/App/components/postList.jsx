import React from "react";
import {NavLink} from "react-router-dom";





const PostsList = ({posts}) => {

    return <>
        {posts.map((post) => <NavLink to={`/posts/${post.id}`} key={post.id}><h3>{post.label}</h3> </NavLink> )}

    </>
}

export default PostsList