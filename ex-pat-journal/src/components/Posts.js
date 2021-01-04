import React, { useState } from 'react'
import Post from './Post'

//////////////// INITIAL STATES ////////////////

function Posts(props) {
console.log(props)

return(
    <div>Posts{
            props.userList.map((user, id) => 
            (
                <div key={id} className='post card'>
                    Username: {user.username}
                    {
                        user.posts.map((post,idx) => {
                        return(
                        <div key={idx} className='post card'>
                            <Post user={user}/> 
                        </div>
                            )
                        })
                    }
                </div>
            ))  
        }
    </div>
)
    }
export default Posts;