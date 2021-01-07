import { 
    API_ALL_POSTS_START,
    API_GET_ALL_POSTS_SUCCESS,
    API_POST_ALL_POSTS_SUCCESS,
    API_ALL_POSTS_FAIL,
    SET_CURRENT_USERNAME,
    API_DELETE_MY_POST_SUCCESS
    // FORM_ERROR 
} from '../actions';

// export const initialState = {
//     smurfs: [],
//     isLoading: false,
//     error: "",
//     smurfFormErrorMessage: ""
// }

export const initialState = {
    currentUsername: "",
    allPosts: [],
    isLoading: false,
    error: ""

    // smurfFormErrorMessage: ""
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
                // allPosts: action.payload,
                allPosts: [...state.allPosts, action.payload],
                isLoading: false,
                error: ""
                // smurfFormErrorMessage: ""
            });
        // case(API_PUT_MY_POSTS_SUCCESS):
        //     return({
        //         ...state,
        //         allPosts: [...state.allPosts, action.payload],
        //         isLoading: false,
        //         error: ""
        //         // smurfFormErrorMessage: ""
        //     });
        case(API_DELETE_MY_POST_SUCCESS):
            return({
                ...state,
                allPosts: state.allPosts.filter(post => post.id !== action.payload), 
                // [...state.allPosts, action.payload],
                isLoading: false,
                error: ""
                // smurfFormErrorMessage: ""
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
        // case(FORM_ERROR):
        //     return({
        //         ...state,
        //         isLoading: false,
        //         smurfFormErrorMessage: action.payload
        //     });
        default:
            return state;
    }
}

export default reducer;