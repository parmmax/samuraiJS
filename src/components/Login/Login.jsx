import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Login = (props) => {
   return (
      <Container fluid className="home-bg min-vh-100 zIndex-1">
         <Container className="vh-100 text-left d-flex justify-content-center align-items-center">
            <section>
               <Form className="bg-clouds rounded-lg shadow-lg px-5 py-4">
                  <h2 className="text-primary">Sing in</h2>

                  <Form.Group controlId="formBasicEmail">
                     <Form.Label className="text-muted">Email address</Form.Label>
                     <Form.Control className="border-" type="email" placeholder="Enter email"/>
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                     <Form.Label className="text-muted">Password</Form.Label>
                     <Form.Control className="border" type="password" placeholder="Password"/>
                  </Form.Group>

                  <Form.Group controlId="formBasicCheckbox">
                     <Form.Check type="checkbox"
                                 variant="primary"
                                 className=""
                                 label="Remember Me"/>
                  </Form.Group>

                  <Button variant="outline-primary" type="submit" size="md">
                     Submit
                  </Button>
               </Form>
            </section>
         </Container>
      </Container>
   )
}

export default Login

// ? <FontAwesomeIcon className="text-primary" icon={faSignInAlt} size="1x" />
// : <FontAwesomeIcon className="text-secondary" icon={faSignOutAlt} size="1x" />