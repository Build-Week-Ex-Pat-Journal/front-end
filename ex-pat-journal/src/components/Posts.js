import React, { useState, useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import styled from 'styled-components'

// import {  fetchAllPosts, addPost, setCurrentUsername } from './../actions';

import { fetchAllPosts } from './../actions';

//////////////// INITIAL STATES ////////////////

function Posts(props) {
    // console.log(props)
    // const { fetchAllPosts } = props;

    useEffect(() => {
        props.fetchAllPosts();
            // .then(res => {
            //     console.log(res);

            // })
    }, [])


///// STYLING ////////    
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

    const PostsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
    `
    const PageWrapper = styled.div`
    width: 100%;
    h2 {
        margin-left:5%;
    }
    `

    return(
        <PageWrapper>
            <h2>All Posts:</h2>
            <PostsWrapper>
            {
                props.isLoading ? (<div>Loading</div>) 
                : (props.allPosts.map((post, id) => (
                    <PostWrapper key={id} className='post-card'>
                        <ImgWrapper>
                            <img src={post.image} alt="uploaded" style={{maxWidth: "100%"}}/>
                        </ImgWrapper>
                        <TextContentWrapper>
                            <h4>{post.user_id}</h4>
                            <p>{post.story}</p>
                        </TextContentWrapper>
                    </PostWrapper>
                )))  
            }
            </PostsWrapper>
        </PageWrapper>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        allPosts: state.allPosts
    }
};

export default connect(mapStateToProps, {fetchAllPosts})(Posts);

// {
//     allPosts: [
//         {
//             username: "",
//             photo: "",
//             story: ""
//         }
//     ]
// }


// export default Posts;

{/* <Posts currentUser={currentUser} setCurrentUser={setCurrentUser} currentPost={currentPost} setCurrentPost={setCurrentPost} posts={posts} setPosts={setPosts} userList={userList} setUserList={setUserList}/>  */}
