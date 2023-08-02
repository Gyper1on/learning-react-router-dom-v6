import React from "react";
import {useParams} from "react-router-dom";


const Post = () => {
     const params = useParams();
     console.log(JSON.stringify(params))
     return 'null'
}

export default Post