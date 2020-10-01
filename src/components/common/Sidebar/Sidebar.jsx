import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export const Sidebar = () => {
   return (
      <>
         <Navbar bg="transporent" className="p-2 w-100 position-sticky">
            <Nav className="flex-column ">
               <Nav.Link className="p-1"
                         href="/users">Users</Nav.Link>
               <Nav.Link className="p-1"
                         href="/messages">Messages</Nav.Link>
               <Nav.Link className="p-1"
                         href="/projects">Projects</Nav.Link>
               <Nav.Link className="p-1"
                         href="/media">Media</Nav.Link>
               <Nav.Link className="p-1"
                         href="/settings">Settings</Nav.Link>
               <Nav.Link className="p-0"
                         href="/profile/2"><small>Samurai Dimych</small></Nav.Link>
               <Nav.Link className="p-0"
                         href="/profile/1049"><small>Dimych IT-Kamasutra</small></Nav.Link>
               {/*<Nav.Link className="text-primary p-0" href="/projects">Projects</Nav.Link>*/}
            </Nav>
         </Navbar>
      </>
   )
}