import React, { useState, useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

// import {  fetchAllPosts, addPost, setCurrentUsername } from './../actions';

import { fetchAllPosts } from './../actions';

//////////////// INITIAL STATES ////////////////

function Posts(props) {
    console.log(props)

    useEffect(() => {
        fetchAllPosts();
            // .then(res => {
            //     console.log(res);

            // })
    }, [])

    return(
        <div>
            {
                console.log(props)
            }
            <h2>All Posts:</h2>
            {
                props.isLoading ? (<div>Loading</div>) 
                : (props.allPosts.map((post, id) => 
                (
                    <div key={id} className='post card'>
                        <h4>Username: {post.username}</h4>
                        Photo: {post.photo}<br />
                        Story: {post.story}
                        {/* {
                            post.posts.map((post,idx) => {
                            return(
                            <div key={idx} className='post card'>
                                <Post user={user}/> 
                            </div>
                                )
                            })
                        } */}
                    </div>
                )))  
            }
        </div>
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
