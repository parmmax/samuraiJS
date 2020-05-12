import React from "react";
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d =>
        <Interlocutor key={d.id}
                      id={d.id}
                      name={d.name}/>);

    let messagesElement = props.messages.map(m =>
        <Message key={m.id}
                 id={m.id}
                 message={m.message}/>);

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
                <NewMessage newTextMessage={props.newTextMessage}
                            onNewMessageChange={props.onNewMessageChange}
                            onSendMessageClick={props.onSendMessageClick}
                />
            </div>
        </div>
    )
};

export default Dialogs