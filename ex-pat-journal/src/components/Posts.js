import React, { useState, useEffect } from 'react';
import Post from './Post';
import { connect } from 'react-redux';

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

    return(
        <div>
            <h2>All Posts:</h2>
            {
                props.isLoading ? (<div>Loading</div>) 
                : (props.allPosts.map((post, id) => (
                    <div key={id} className='post card'>
                        <h4>Username: {post.user_id}</h4>
                        Image: {post.image}<br />
                        Story: {post.story}
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
