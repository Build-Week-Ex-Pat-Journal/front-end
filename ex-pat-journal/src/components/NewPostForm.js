import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import registerschema from '../registerschema'

import { addPost } from './../actions';
import { connect } from 'react-redux';

// ****** Most of the comments in this file pertain to the various
// methods for checking that story is not empty. I think probably the simplest
// method would be just to disable the button if it's an empty string. ******
// ****** Also notable about the form below: currently it is designed to accept
// image as STRING. Ultimately, for the stretch, we're planning to try to figure 
// out how to make it accept an image upload. To that end, we will likely have to
// change this form (and a few other stations at which newPost stops on its way
// to state) significantly. ******

const initialFormValues = {
    image: "",
    story: ""
}
  
//   const initialFormErrors = {
//     image: "",
//     story: ""
//   }
  
// const initialDisabled = true;


function NewPostForm(props) {

  const [formValues, setFormValues] = useState(initialFormValues);
  
  const onChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const onSubmit = e => {
      e.preventDefault();
  //   const image = formValues.image;
  //   const story = formValues.story;

  //   const newPost =

  //   addPost(props.currentUsername, image, story);
      
      const newPost = {
          user_id: props.currentUsername,
          ...formValues
      }
      console.log(newPost);
      props.addPost(newPost);
      props.history.push("/all-posts");

      // if (formValues.story){
      //     const newPost = {
      //         username: props.currentUsername,
      //         ...formValues
      //     }
      //     console.log(newPost);
      //     addPost(newPost);
      // } else {
      //     console.log("Story required field")
      // }
  }
  
  return(
      <div className="Form">
        {/* <div style={{"color": "red"}} className="errors">
          {registerErrors.fname}<br/>
          {registerErrors.lname}<br/>
          {registerErrors.email}<br/>  
          {registerErrors.username}<br/>
          {registerErrors.password}<br/>
          {registerErrors.confirmPassword}<br/>
        </div> */}
        <form className="form container" onSubmit={onSubmit}>
          <label>
            Image: 
            {/* CHANGE THIS FORM WHEN WE DO IT FOR IMAGES: */}
            <input
              value={formValues.image}
              onChange={onChange}
              name="image"
              type="text"
            />
          </label>
          <br />

          <label>
            Story: 
            <input
              value={formValues.story}
              onChange={onChange}
              name="story"
              type="text"
            />
          </label>
          <br />

{/* disabled={disabled} */}
          <button>Post</button>
          {/* <button className="loginButton" disabled={registerDisabled}>register
          </button> */}
        </form>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        currentUsername: state.currentUsername
    }
};

export default connect(mapStateToProps, {addPost})(NewPostForm);