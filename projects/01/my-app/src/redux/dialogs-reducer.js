const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                msg: action.newMessageBody,
                typeMessage: false
            };
            return {
                ...state,
                messages: [...state.messages, newMessage] /* Копируем подмассив (мы его переопределяем). После запятой
                мы как бы пушим newMessage. */
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;