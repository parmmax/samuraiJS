import React from 'react'
import { Button, Nav } from 'react-bootstrap'

const Auth = (props) => {
   return (
      <>
         {
            props.isAuth
               ? <Nav >
                  <Nav.Link href="/profile" className="text-primary">{props.login}</Nav.Link>
                  <Button className="border-0 mx-1"
                          variant="outline-light"
                          size="md"
                          onClick={props.logout}>Logout</Button>
               </Nav>
               : <>
                  <Nav.Link href="/users" className="text-primary">All Users</Nav.Link>
                  <Button className="border-0 mx-1"
                          variant="outline-secondary"
                          size="md"
                          href="/login">Login</Button>
               </>
         }
      </>
   )
}

export default Auth