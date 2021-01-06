import React, { useState } from "react";
import styled from 'styled-components'

const initialIsEditing = false;

function MyPost(props){
    const [isEditing, setIsEditing] = useState(initialIsEditing)
    const {post, id} = props


    const PostWrapper = styled.div`
    border: 2px solid black;
    box-shadow: 5px 10px #888888;
    margin: 5% auto;
    width: 30%;
    border-radius:10px;
    @media (max-width: 1800px) {
        margin: 5% auto;
        width: 40%;
    }
    @media (max-width: 1300px) {
        margin: 5% auto;
        width: 80%;
    }
    `
    const ImgWrapper = styled.div`
    width: 90%;
    text-align: center;
    margin: 2% auto;
    `
    const TextContentWrapper = styled.div`
    padding-right: 5%;
    padding-left: 5%;`

    return(
        isEditing ? <p>A Post Form</p> 
        
        :
                    <PostWrapper key={id} className='post-card'>
                        <ImgWrapper>
                            <img src={post.image} alt="uploaded" style={{maxWidth: "100%"}}/>
                        </ImgWrapper>
                        <TextContentWrapper>
                            <h4>{post.user_id}</h4>
                            <p>{post.story}</p>
                        </TextContentWrapper>
                    </PostWrapper>
    )
}

export default MyPost;