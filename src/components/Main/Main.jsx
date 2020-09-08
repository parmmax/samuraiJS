import React from "react";
import { Container, Jumbotron, Button } from 'react-bootstrap';

const Main = (props) => {
    return (
        <Container >
            <Jumbotron className="jumbotron my-0">
                <h1 className="display-2 text-primary">PenScript</h1>
                <hr className="my-4" />
                <p classsName="text-muted">This's my way to learn React</p>
                <p classsName="">
                    <Button size="md" href="#" variant="outline-primary">Show details</Button>
                </p>
            </Jumbotron>
        </Container>
    )
};

export default Main

