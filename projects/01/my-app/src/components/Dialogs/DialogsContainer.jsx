import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// Формируем данные для Dialogs
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

// Формируем колбэки для Dialogs
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

/*Тут мы как бы конектим Dialogs к store. Где функция mapStateToProps передает в Dialogs пропсы которые являются данными,
* а mapDispatchToProps передает колбэки.  */
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;