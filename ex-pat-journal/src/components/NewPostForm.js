import React,  { useState, useEffect} from 'react'; 
import Posts from './Posts';
import axios from 'axios';
import * as yup from 'yup';
import registerschema from '../registerschema'

import { addPost } from './../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    image: "",
    story: ""
}
  
//   const initialFormErrors = {
//     image: "",
//     story: ""
//   }
  
const initialDisabled = true;


function NewPostForm(props) {

    const [formValues, setFormValues] = useState(initialFormValues);

    // This is a hack
    // const [disabled, setDisabled] = useState(initialDisabled);
    // if (formValues.story){
    //     setDisabled(true);
    // }
    
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

    // export default NewPostForm;