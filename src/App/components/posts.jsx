import React from "react";
import {useParams, useLocation} from "react-router-dom";
import Post from "./Post";
import PostList from "./postList";
import query from "query-string"
import _ from  "lodash"




const Posts = () => {
    const params = useParams()
    // const location = useLocation()

    const posts = [
        {id: 1, label: 'post 1'},
        {id: 2, label: 'post 2'},
        {id: 3, label: 'post 3'}
    ]

    const postId = params.postId
    // const search = query.parse(location.search)

    // const cropPosts = search && search.count ? _(posts).slice(0).take(search.count).value(): posts


    return <>
        {postId? <Post posts={posts} id={postId}/> : <PostList posts={posts}/>}

    </>
}

export default Posts