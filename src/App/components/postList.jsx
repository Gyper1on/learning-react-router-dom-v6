import React from "react";
import Login from "./login";
import { useParams } from "react-router-dom";



const PostsList = ({posts}) => {
    const params = useParams();
    console.log(JSON.stringify(params))
    return <>
        {posts.map((post) => <h3 key={post.id} >{post.label}</h3> )}

    </>
}

export default PostsList