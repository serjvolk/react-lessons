const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, msg: "Утром побегала с орехом..." },
                {id: 1, msg: "Вечером побегала с орехом..."},
                {id: 2, msg: "Ночью сплю с орехом..."},
                {id: 3, msg: "Сниться мне орех"}
            ],
            newPostTextVal: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Михаил" },
                {id: 2, name: "Олег"},
                {id: 3, name: "Коля"},
                {id: 4, name: "Оля"},
                {id: 5, name: "Наташа"},
                {id: 6, name: "Жорик"}
            ],
            messages: [
                {id: 1, msg: "Привет я Михаилко, как у тебя дела???", typeMessage: true},
                {id: 2, msg: "Все хорошо я учу ReactJS", typeMessage: false},
                {id: 3, msg: "И много уже выучил???", typeMessage: true},
                {id: 4, msg: "23 урока", typeMessage: false}
            ],
            newMessageTextVal: ''
        }
    },
    _callSubscriber(){
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                msg: this._state.profilePage.newPostTextVal
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostTextVal = "";
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostTextVal = action.postMessage;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_TEXT){
            this._state.dialogsPage.newMessageTextVal = action.messageText;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 5,
                msg: this._state.dialogsPage.newMessageTextVal,
                typeMessage: false
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageTextVal = "";
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, postMessage: text});
export const addMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: text});

export default store;
window.store = store;