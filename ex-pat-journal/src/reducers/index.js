import { 
    API_ALL_POSTS_START,
    API_GET_ALL_POSTS_SUCCESS,
    API_POST_ALL_POSTS_SUCCESS,
    API_ALL_POSTS_FAIL,
    SET_CURRENT_USERNAME,
    API_DELETE_MY_POST_SUCCESS,
    API_PUT_MY_POSTS_SUCCESS
} from '../actions';

export const initialState = {
    currentUsername: "",
    allPosts: [],
    isLoading: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(API_ALL_POSTS_START):
            return({
                ...state,
                isLoading: true,
                error: ""
            });
        case(API_GET_ALL_POSTS_SUCCESS):
            return({
                ...state,
                currentUsername: localStorage.getItem("currentUsernameLocalStorage"),
                allPosts: action.payload,
                isLoading: false,
                error: ""
            });
        case(API_POST_ALL_POSTS_SUCCESS):
            return({
                ...state,
                currentUsername: localStorage.getItem("currentUsernameLocalStorage"),
                allPosts: [...state.allPosts, action.payload],
                isLoading: false,
                error: ""
            });

        case(API_PUT_MY_POSTS_SUCCESS):
            const editedArray = state.allPosts.filter(post => post.id !== action.payload.id).push(action.payload);

            return({
                ...state,
                allposts: editedArray,
                isLoading: false,
                error: ""
            });
        case(API_DELETE_MY_POST_SUCCESS):
            return({
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== action.payload),
                isLoading: false,
                error: ""
            });
        case(API_ALL_POSTS_FAIL):
            return({
                ...state,
                currentUsername: localStorage.getItem("currentUsernameLocalStorage"),
                isLoading: false,
                error: action.payload
            });
        case(SET_CURRENT_USERNAME):
            return({
                ...state,
                currentUsername: action.payload
            })
        default:
            return state;
    }
}

export default reducer;