import React, { useState } from "react";
import styled from 'styled-components'
import ReadMoreReact from 'read-more-react';
import '../Post.css';

const minLength = 80;
const idealLength = 100;
const maxLength = 2000;

function Post(props){
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
    padding-left: 5%;
    padding-bottom: 5%`

    return(
        <PostWrapper key={id} className='post-card'>
            <h4 className="username-header">Post by {post.user_id}:</h4>
            {
                post.image ? 
                (
                    <ImgWrapper>
                        <img src={post.image} alt="uploaded" style={{maxWidth: "100%"}}/>
                    </ImgWrapper>
                )
                : null
            }
            <TextContentWrapper>
                {/* <h4>{post.user_id}</h4> */}

                <ReadMoreReact text={post.story}
                min={minLength}
                ideal={idealLength}
                max={maxLength}
                readMoreText='Click Here to Read More, Click Again to Collapse'/>

            </TextContentWrapper>
        </PostWrapper>
    )
}

export default Post;