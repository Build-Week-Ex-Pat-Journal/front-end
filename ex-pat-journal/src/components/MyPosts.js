import React, { useState, useEffect } from 'react';
import MyPost from './MyPost';
import { connect } from 'react-redux';
import styled from 'styled-components'

// import {  fetchMyPosts, editPost, fetchAllPosts, addPost, setCurrentUsername } from './../actions';

import { fetchAllPosts } from './../actions';

//////////////// INITIAL STATES ////////////////

function MyPosts(props) {
    // console.log(props)

    useEffect(() => {
        props.fetchAllPosts();

        // props.fetchMyPosts(props.currentUsername);
    }, [])


///// STYLING ////////    
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
            <h2>My Posts:</h2>
            <PostsWrapper>
            {
                props.isLoading ? (<div>Loading</div>) 
                : (props.allPosts.map((post, idx) => (
                    // <MyPost key={id} post={post}/>
                    post.user_id === props.currentUsername ? 
                    <MyPost key={idx} post={post}/>
                    : null
                )))  
            }
            </PostsWrapper>
        </PageWrapper>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        allPosts: state.allPosts,
        currentUsername: state.currentUsername
    }
};

export default connect(mapStateToProps, {fetchAllPosts})(MyPosts);

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
