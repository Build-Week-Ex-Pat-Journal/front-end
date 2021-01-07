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
      
      const newPost = {
          user_id: props.currentUsername,
          ...formValues
      }
      console.log(newPost);
      props.addPost(newPost);
      props.history.push("/all-posts");
  }
  
  return(
      <div className="Form">
        <form className="form container" onSubmit={onSubmit}>
          <label>
            Image url: 
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

          <button>Post</button>
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