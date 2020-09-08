import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const NewMessage = (props) => {

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };

    let onNewMessageChange = (event) => {
        let newTextFromTextarea = event.target.value;
        props.onNewMessageChange(newTextFromTextarea)
    };

    return (
        <InputGroup className="w-100 mb-4" size="sm">
            <FormControl
                placeholder="Enter your message"
                aria-label="Enter your message"
                aria-describedby="basic-addon3"
                onChange={onNewMessageChange}
                value={props.newTextMessage}
            />
            <InputGroup.Append>
                <Button onClick={onSendMessageClick} variant="info">Send</Button>
            </InputGroup.Append>
        </InputGroup>
    )
};
export default NewMessage