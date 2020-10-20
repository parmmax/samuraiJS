import React, { useState } from 'react'
import {
   Navbar,
   Container,
   Collapse, Button,
} from 'react-bootstrap'
import {
   faFeatherAlt,
   faBars,
   faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CollapseNavContainer from './CollapseNav/CollapseNavContainer'
import AuthContainer from '../Auth/AuthContainer'

const Header = (props) => {
   const [open, setOpen] = useState(false)

   let textColorCollapseOpen = ''
   let textColorCollapseClose = 'text-muted'
   let textColorCollapseToggle = open
      ? textColorCollapseOpen
      : textColorCollapseClose

   let bgOpen = 'bg-dark shadow'
   let bgClose = 'bg-transparent'
   let bgToggle = open ? bgOpen : bgClose

   let variantOpen = 'dark'
   let variantClose = 'transparent'
   let variantToggle = open ? variantOpen : variantClose

   return (
      <header id="header" className="position-relative zIndex-2">
         <Container fluid className={`px-0 position-absolute  ${bgToggle}`}>
            <Collapse in={open}>
               <Container>
                  <CollapseNavContainer variantToggle={variantToggle}
                                        bgToggle={bgToggle}
                                        textColorCollapseToggle={textColorCollapseToggle}/>
               </Container>
            </Collapse>
            <Navbar bg={variantToggle}
                    variant={variantToggle}
                    expand="sm">
               <Container className="d-flex flex-row">
                  <Navbar.Brand href="/"
                                className="pl-0 ml-0 font-weight-light font-family-secondary text-white">
                     <h3>
                        pen<FontAwesomeIcon
                        className="ml-1 mr-0 p-0 text-primary"
                        icon={faFeatherAlt} size="1x"/>
                        script
                     </h3>
                  </Navbar.Brand>
                  <div className="d-flex flex-row">
                     <AuthContainer/>
                     <Button
                        onClick={() => setOpen(!open)}
                        onBlur={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="collapse-navigation"
                        variant="outline-primary"
                        size="sm"
                        className="btn btn-link bg-transparent border-0 shadow-none"
                     >
                        {
                           open ? <FontAwesomeIcon icon={faTimes} size="2x"/>
                              : <FontAwesomeIcon icon={faBars} size="2x"/>
                        }
                     </Button>
                  </div>
               </Container>
            </Navbar>
         </Container>
      </header>
   )
}

export default Header


