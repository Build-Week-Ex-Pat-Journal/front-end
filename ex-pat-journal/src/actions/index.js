import axios from 'axios';
import { axiosWithAuth } from './../utils/axiosWithAuth';

export const API_ALL_POSTS_START = "API_ALL_POSTS_START";
export const API_GET_ALL_POSTS_SUCCESS = "API_GET_ALL_POSTS_SUCCESS";

export const API_POST_ALL_POSTS_SUCCESS = "API_POST_ALL_POSTS_SUCCESS";
export const API_ALL_POSTS_FAIL = "API_ALL_POSTS_FAIL";

export const SET_CURRENT_USERNAME = "SET_CURRENT_USERNAME";


// export const FORM_ERROR = "FORM_ERROR";

export const fetchAllPosts = () => dispatch => {
    dispatch({type:API_ALL_POSTS_START});

    axiosWithAuth()
        .get("https://expatjournal2021.herokuapp.com/posts")
        .then(res => {
            console.log(res.data);
            dispatch({type:API_GET_ALL_POSTS_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
}

// export const addPost = (currentUsername, image, story) => dispatch => {
    // const newPost = {
    //     username: currentUsername,
    //     image: image,
    //     story: story
    //     // story, image
    // }


export const addPost = (newPost) => dispatch => {
    // if (!currentUsername || !photo || !story) {
    //     dispatch({type:FORM_ERROR, payload:"Photo and story are required, and user must be logged in."})
    // } else {
        // user_id instead of username?
    // }

    // console.log(newPost);

    axiosWithAuth()
        .post("https://expatjournal2021.herokuapp.com/posts/", newPost)
        .then((res) => {
            console.log(res);
            dispatch({type:API_POST_ALL_POSTS_SUCCESS, payload:newPost});
        })
        .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
}

export const fetchMyPosts = (user_id) => dispatch => {
    dispatch({type:API_ALL_POSTS_START});

    axiosWithAuth()
        .get(`https://expatjournal2021.herokuapp.com/${user_id}/posts/`)
        .then(res => {
            // console.log(res.data);
            dispatch({type:API_GET_ALL_POSTS_SUCCESS, payload:res.data});
        })
        .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
}

export const editPost = (id, editedPost) => dispatch => {
    
    axiosWithAuth()
        .put(`https://expatjournal2021.herokuapp.com/posts/${id}`, editedPost)
        .then((res) => {
            console.log(res);
            dispatch({type:API_POST_ALL_POSTS_SUCCESS, payload:editedPost});
        })
        .catch(err => dispatch({type:API_ALL_POSTS_FAIL, payload:err}));
}

export const setCurrentUsername = () => {
    const currentUsernameLocalStorage = localStorage.getItem("currentUsernameLocalStorage");

    console.log(currentUsernameLocalStorage);
    
    return {type:SET_CURRENT_USERNAME, payload:currentUsernameLocalStorage};
}


// const initialUser = {
//     fname: '',
//     lname: '',
//     email: '',
//     username: '',
//     password: '',
//     posts:[]
//   }
  
//   const initialPost = {
//     photo:'',
//     story:''
//   }