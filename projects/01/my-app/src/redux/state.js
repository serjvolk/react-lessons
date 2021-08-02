let state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        msg: state.profilePage.newPostTextVal
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostTextVal = "";
    rerenderEntireTree(state);
}

export const newPostText = (postMessage) => {
    state.profilePage.newPostTextVal = postMessage;
    rerenderEntireTree(state);
}

let rerenderEntireTree;
export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;