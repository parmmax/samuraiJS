import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export const CollapseNav = (props) => {

   let linksClassNames = `m-0 p-0 ${props.textColorCollapseToggle}`

   let navLinks = props.links.nav.map(n =>
      <Nav.Link key={n.id}
                id={n.id}
                href={n.href}
                className={linksClassNames}

      >
         <small>{n.title}</small>
      </Nav.Link>
   )

   let infoLinks = props.links.info.map(i =>
      <Nav.Link key={i.id}
                id={i.id}
                href={i.href}
                target="_blank"
                className={linksClassNames}

      >
         <small>{i.title}</small>
      </Nav.Link>
   )

   return (
      <Navbar variant={props.variantToggle}
              expand="sm"
              className="p-0 pt-1 align-items-start">
         <Nav className="p-0 flex-column w-100">
            <small className="text-muted mb-3">Profile Info</small>
            {navLinks}
         </Nav>
         <Nav className="p-0 flex-column w-100">
            <small className="text-muted mb-3">Supporting Info</small>
            {infoLinks}
         </Nav>
      </Navbar>
   )
}