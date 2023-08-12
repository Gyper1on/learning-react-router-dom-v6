import React from "react";
import {replace} from "lodash";


const Post = ({posts, id, navigate}) => {

    const getPostById = (id) => {
        return posts.find((post) => post.id.toString() === id)
    }

    const post = getPostById(id)

    const handleSave = () => {
        navigate('/posts', {replace: true})
    }


    return <>
        <h2>{post ? post.label : `POST with id: ${id} dont found`}</h2>
        <button onClick={() => {handleSave()
        }}>Сохранить
        </button>
    </>
}

export default Post