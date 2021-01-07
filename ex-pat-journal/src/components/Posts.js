import React, { useState, useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import styled from 'styled-components'

// import {  fetchAllPosts, addPost, setCurrentUsername } from './../actions';

import { fetchAllPosts } from './../actions';

//////////////// INITIAL STATES ////////////////

function Posts(props) {
    console.log(props)
    // const { fetchAllPosts } = props;

    useEffect(() => {
        props.fetchAllPosts();
            // .then(res => {
            //     console.log(res);

            // })
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
            <h2>All Posts:</h2>
            <PostsWrapper>
            {
                props.isLoading ? (<div>Loading</div>) 
                : (props.allPosts.map((post, id) => (
                    <Post key={id} post={post}/>
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
