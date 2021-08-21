import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer (props) {

    let state = props.store.getState();

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return (<Dialogs updateNewMessageText={onMessageChange}
                     addMessage={addMessage}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageTextVal}/>);
}

export default DialogsContainer;