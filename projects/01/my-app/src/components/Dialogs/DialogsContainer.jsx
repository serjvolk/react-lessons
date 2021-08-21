import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

function DialogsContainer (props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageActionCreator(text));
                }

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                }
                return <Dialogs updateNewMessageText={onMessageChange}
                                addMessage={addMessage}
                                dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                                newMessageText={state.dialogsPage.newMessageTextVal}/>
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;