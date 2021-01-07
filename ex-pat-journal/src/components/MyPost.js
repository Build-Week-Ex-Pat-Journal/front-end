import React, { useState } from "react";
import styled from 'styled-components'
import { connect } from 'react-redux';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams, useHistory } from "react-router-dom";

import { editPost, fetchAllPosts, deletePost } from './../actions';

const initialIsEditing = false;

// const initialFormValues = {
//     user_id: "",
//     image: "",
//     story: ""
// }

function MyPost(props){
    const [formValues, setFormValues] = useState(props.post);
    const [isEditing, setIsEditing] = useState(initialIsEditing)
    const {post, idx} = props;
    const { id } = useParams();


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


    const onChange = (evt) => {
        const { name, value } = evt.target;
    
        setFormValues({
          ...formValues,
          [name]: value
        });
    }

    const saveEdit = e => {
        e.preventDefault();

        const editedPost = {
            ...formValues
        }
        // console.log(editedPost);
        // console.log(editedPost.id);
        // console.log(id);

        props.editPost(editedPost.id, editedPost);
        props.fetchAllPosts(props.currentUsername);
        // props.history.push("/my-posts");
    }

    const deletePost = () => {
        console.log(formValues.id);
        props.deletePost(formValues.id);
    }

    // props.key
    return(
        <div className="container-outer">
            {isEditing ? (
                // When I tried to apply to this form the styled component wrappers 
                // used on the post itself (i.e., the PostWrapper and ImgWrapper),
                // I was getting a bug whereby the input would immediately unfocus
                // when one char was written in it, so I reverted to css
                // The relevant classes are in index.css. They all correspond to the styled
                // component wrappers established elsewhere in this component.
                    <form className="post-wrapper" onSubmit={saveEdit}>
                        <div className="input-wrapper">
                            <label>
                                Image url:
                                    <input
                                        value={formValues.image}
                                        onChange={onChange}
                                        name="image"
                                        type="text"
                                    />
                            </label>
                        </div>
                        <div className="input-wrapper">
                            <label>
                                Story: 
                                <input
                                value={formValues.story}
                                onChange={onChange}
                                name="story"
                                type="text"
                                />
                            </label>
                        </div>
                        <div className="edit-post-button">
                            <button>Save</button>
                        </div>
                    </form>
                // </PostWrapper>
            )
            : (<PostWrapper key={idx} className='post-card'>
                <ImgWrapper>
                    <img src={post.image} alt="uploaded" style={{maxWidth: "100%"}}/>
                </ImgWrapper>
                <TextContentWrapper>
                    <h4>{post.user_id}</h4>
                    <p>{post.story}</p>
                </TextContentWrapper>
                <div className="edit-post-button">
                    <button onClick={() => setIsEditing(true)}>Edit Post</button>
                    <button onClick={deletePost}>Delete Post</button>
                </div>
            </PostWrapper>)
            }
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         isLoading: state.isLoading,
//         allPosts: state.allPosts,
//         currentUsername: state.currentUsername
//     }
// };

export default connect(null, {fetchAllPosts, editPost, deletePost})(MyPost);

// export default MyPost;