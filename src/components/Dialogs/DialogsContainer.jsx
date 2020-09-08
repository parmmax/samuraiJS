// import React from "react";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newTextMessage: state.dialogsPage.newMessageText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (newTextFromTextarea) => {
            let action = updateNewMessageTextCreator(newTextFromTextarea);
            dispatch(action);
        },
        onSendMessageClick: () => {
            let sendMessage = sendMessageCreator();
            dispatch(sendMessage);
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer

