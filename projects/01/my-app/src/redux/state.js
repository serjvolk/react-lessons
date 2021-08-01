import rerenderEntireTree from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 0, msg: "Утром побегала с орехом..." },
            {id: 1, msg: "Вечером побегала с орехом..."},
            {id: 2, msg: "Ночью сплю с орехом..."},
            {id: 3, msg: "Сниться мне орех"}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        msg: postMessage
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;