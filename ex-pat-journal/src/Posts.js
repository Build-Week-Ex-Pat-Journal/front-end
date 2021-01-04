import React, { useState } from 'react'
import Post from './Post'

//////////////// INITIAL STATES ////////////////

function Posts(props) {

const { userList } = props
let user = 0
let posts = userList[]
    return(
        <div>Posts
            {
                posts.map((post,idx) =>
                <div key={idx} className='post card'>
                    <Post user={user}/> 
                </div>
                )
            }
             
        </div>
       
    )
}

export default Posts;