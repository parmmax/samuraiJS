import React from "react";
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElement = props.stateDialogs.dialogs.map(d => <Interlocutor name={d.name} id={d.id}/>);
    let messagesElement = props.stateDialogs.messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={classes.wrapper}>
            <div className={classes.dialogsWrap}>
                <h4>Friends</h4>
                <div className={classes.dialog}>
                    <div>{dialogsElement}</div>
                </div>
            </div>
            <div className={classes.messagesWrap}>
                <h4>Messages</h4>
                <div className={classes.message}>
                    {messagesElement}
                </div>
                <NewMessage
                    newTextMessage={props.stateDialogs.newTextMessage}
                    dispatch={props.dispatch}
                />
            </div>

        </div>
    )
};

export default Dialogs