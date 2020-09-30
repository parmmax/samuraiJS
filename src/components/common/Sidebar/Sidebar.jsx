import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export const Sidebar = () => {
   return (
      <Navbar bg="transporent"
              className="shadow rounded-sm w-100 bg-white">
         <Nav className="p-1 flex-column ">
            <Nav.Link className="text-primary p-0"
                      href="/users">Users</Nav.Link>
            <Nav.Link className="text-primary p-0"
                      href="/messages">Messages</Nav.Link>
            <Nav.Link className="text-primary p-0"
                      href="/projects">Projects</Nav.Link>
            <Nav.Link className="text-primary p-0"
                      href="/media">Media</Nav.Link>
            <Nav.Link className="text-secondary p-0"
                      href="/profile/2">Dimych's profile</Nav.Link>
            {/*<Nav.Link className="text-primary p-0" href="/projects">Projects</Nav.Link>*/}
         </Nav>
      </Navbar>
   )
}