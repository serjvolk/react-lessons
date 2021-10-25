import profileReducer, {addPostMessage, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 0, msg: "Утром я побегала с орехом..." },
        {id: 1, msg: "Вечером побегала с орехом..."},
        {id: 2, msg: "Ночью сплю с орехом..."},
        {id: 3, msg: "Сниться мне орех"}
    ]
}

it('length of post should be corrected', () => {
    // Входные данные для теста
    let action = addPostMessage("svone clutcher");

    // Действие теста
    let newState = profileReducer(state, action);

    // Проверка результата
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be corrected', () => {
    // Входные данные для теста
    let action = addPostMessage("svone clutcher");

    // Действие теста
    let newState = profileReducer(state, action);

    // Проверка результата
    expect(newState.posts[4].msg).toBe("svone clutcher");
});

it('after deleting length of messages should be decrement', () => {
    // Входные данные для теста
    let action = deletePost(1);

    // Действие теста
    let newState = profileReducer(state, action);

    // Проверка результата
    expect(newState.posts.length).toBe(3);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    // Входные данные для теста
    let action = deletePost(1000);

    // Действие теста
    let newState = profileReducer(state, action);

    // Проверка результата
    expect(newState.posts.length).toBe(4);
});