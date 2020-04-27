import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../Redux/profileReducer";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let onSendMessageClick = () => {
        let sendMessage = sendMessageCreator();
        props.store.dispatch(sendMessage);
    };

    let onNewMessageChange = (newTextFromTextarea) => {
        let action = updateNewMessageTextCreator(newTextFromTextarea);
        props.store.dispatch(action);
    };

    return (
        <Dialogs dialogs={props.store.getState().dialogsPage.dialogs}
                 messages={props.store.getState().dialogsPage.messages}
                 newTextMessage={props.store.getState().dialogsPage.newTextMessage}
                 onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
        />
    )
};

export default DialogsContainer