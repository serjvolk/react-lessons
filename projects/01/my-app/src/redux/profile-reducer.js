const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 0, msg: "Утром я побегала с орехом..." },
        {id: 1, msg: "Вечером побегала с орехом..."},
        {id: 2, msg: "Ночью сплю с орехом..."},
        {id: 3, msg: "Сниться мне орех"}
    ],
    newPostTextVal: ''
}

/* Мы в redux-store вызываем profileReducer, но программа не работает так как в
* state === undefined, поэтому если state нету, мы присваиваем state-у initialState,
* типа задаем ему значение по дефолту */

const profileReducer = (state = initialState, action) => {
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