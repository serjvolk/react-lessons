const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                msg: state.newPostTextVal
            };
            state.posts.push(newPost);
            state.newPostTextVal = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTextVal = action.postMessage;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text});

export default profileReducer;