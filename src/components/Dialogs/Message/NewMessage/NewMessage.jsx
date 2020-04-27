import React from "react";
import classes from './NewMessage.module.css';
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../Redux/dialogsReducer";

const NewMessage = (props) => {

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };

    let onNewMessageChange = (event) => {
        let newTextFromTextarea = event.target.value;
        props.onNewMessageChange(newTextFromTextarea)
    };

    return (
        <div>
            <section className={classes.newMessageWrap}>
                <textarea
                    className={classes.newMessageArea}
                    cols="30" rows="10"
                    placeholder='Enter your message'
                    // ref={newMessageElement}
                    onChange={onNewMessageChange}
                    value={props.newTextMessage}
                />
                <div className={classes.btnWrap}>
                    <button onClick={onSendMessageClick} className={classes.btnSendMessage} type="button">
                        Send
                    </button>
                </div>
            </section>
        </div>
    )
};
export default NewMessage