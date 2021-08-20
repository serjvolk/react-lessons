import {combineReducers, createStore} from "redux";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

// Комбайним редьюсеры. Собираем их в кучу.
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

// Отдаем комбайн с редьюсерами стору
let store = createStore(reducers);

export default store;