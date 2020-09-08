import React from "react";
import { Container, Button } from 'react-bootstrap';

const Footer = () => {
    return (

        <footer className="fluid bg-dark">
            <Container>
                <section className="d-flex flex-row justify-content-between align-items-end">
                    <ul className="">
                        <h5 className="text-secondary">Documentation</h5>
                        <li className="my-0"><Button variant="link text-muted" size="sm" href="https://social-network.samuraijs.com/">API documentation</Button></li>
                        <li className="my-0"><Button variant="link text-muted" size="sm" href="https://bootstrap-4.ru/articles/cheatsheet/">Bootstrap Cheatsheet</Button></li>
                        <li className="my-0"><Button variant="link text-muted" size="sm" href="https://react-bootstrap.github.io/components/">React-Bootstrap</Button></li>
                        <li className="my-0"><Button variant="link text-muted" size="sm" href="https://www.youtube.com/watch?v=gb7gMluAeao&ab_channel=IT-KAMASUTRA">YouTube</Button></li>
                    </ul>
                    <ul className="">
                        <li><Button variant="outline-secondary" size="sm" href="#header">Go on top</Button></li>
                    </ul>
                </section>
            </Container>
        </footer>

    )
};

export default Footer