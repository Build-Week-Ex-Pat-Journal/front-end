import React, { useState } from "react";

const initialIsEditing = false;

function Post(){
    const [isEditing, setIsEditing] = useState(initialIsEditing)
    return(
        isEditing ? <p>A Post Form</p> 
        
        :
        <p>a Completed Post</p>
    )
}

export default Post;