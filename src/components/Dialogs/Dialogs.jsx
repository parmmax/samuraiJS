import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Interlocutor from "./Interlocutor/Interlocutor";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";

const Dialogs = (props) => {

    let dialogsElement = props.dialogs.map(d =>
        <Interlocutor key={d.id}
            id={d.id}
            name={d.name} />);

    let messagesElement = props.messages.map(m =>
        <Message key={m.id}
            id={m.id}
            message={m.message} />);

    return (
        <Container fluid>
            <Container>
                <section>
                    <Row>
                        <Col className="col-md-3 col-sm-4">
                            <Card className="border-0 shadow sticky-top">
                                <Card.Header className="border-0">
                                    <h2 className="font-weight-light">Friends</h2>
                                </Card.Header>
                                {dialogsElement}
                            </Card>
                        </Col>
                        <Col className="col-md-9 col-sm-8">
                            <Card className="border-0 shadow sticky-top">
                                <Card.Header className="border-0">
                                    <h2 className="font-weight-light">Messages</h2>
                                </Card.Header>
                                <Card.Body className="">
                                    {messagesElement}
                                </Card.Body>
                                <Card.Footer className="border-0">
                                    <NewMessage newTextMessage={props.newTextMessage}
                                        onNewMessageChange={props.onNewMessageChange}
                                        onSendMessageClick={props.onSendMessageClick}
                                    />
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </Container>

    )
};

export default Dialogs