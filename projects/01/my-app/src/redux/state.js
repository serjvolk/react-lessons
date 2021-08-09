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
            ]
        }
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('State changed');
    },
    addPost(){
        let newPost = {
            id: 5,
            msg: this._state.profilePage.newPostTextVal
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostTextVal = "";
        this._callSubscriber(this._state);
    },
    newPostText(postMessage){
        this._state.profilePage.newPostTextVal = postMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;