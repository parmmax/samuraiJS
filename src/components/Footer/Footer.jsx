import React from "react";
import { Container, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <article className="d-flex flex-row justify-content-between align-items-start">
                    <Button variant="outline-primary" size="sm" href="#header">Go on top</Button>
                </article>
            </Container>
        </footer>
    )
};

export default Footer