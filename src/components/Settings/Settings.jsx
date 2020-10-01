import React from 'react';
import { Button, Container } from 'react-bootstrap'

const Settings = () => {
    return (
       <Container className="py-4">
          <section className="min-vh-100 mt-4 d-flex flex-column justify-content-start">
             <header>
                <h2 className="display-4 font-family-secondary text-primary font-weight-light">Settings</h2>
                <hr className="my-4" />
                <Button variant="outline-info" href="/profile" className="ml-2">Back to profile</Button>
             </header>
             <article>
             </article>
          </section>
       </Container>
    )
};

export default Settings