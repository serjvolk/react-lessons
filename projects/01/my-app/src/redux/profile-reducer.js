import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 0, msg: "Утром я побегала с орехом..." },
        {id: 1, msg: "Вечером побегала с орехом..."},
        {id: 2, msg: "Ночью сплю с орехом..."},
        {id: 3, msg: "Сниться мне орех"}
    ],
    profile: null,
    newPostTextVal: ''
}

/* Мы в redux-store вызываем profileReducer, но программа не работает так как в
* state === undefined, поэтому если state нету, мы присваиваем state-у initialState,
* типа задаем ему значение по дефолту */

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST: {
            let newPost = {
                id: 5,
                msg: state.newPostTextVal
            };
            return {
                ...state,
                newPostTextVal: "",
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostTextVal: action.postMessage
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};


export default profileReducer;