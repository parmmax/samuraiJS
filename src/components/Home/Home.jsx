import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
   return (
      <Container fluid className="min-vh-100 zIndex-1 bg-home">
         <Container
            className="vh-100 text-center d-flex justify-content-center align-items-center">
            <section>
               <h1 className="display-2 font-family-secondary">
                  {/* Перо переместить над i. Использовать другое изображение пера */}
                  pen
                  <FontAwesomeIcon className="ml-3 mr-0 p-0 text-primary"
                                   icon={faFeatherAlt} size="1x"/>
                  script
               </h1>
               <h5 className="font-weight-lighter my-4">My way to learning
                  React-Redux and TypeScript</h5>
               <Button href="/profile"
                       size="lg"
                       variant="outline-primary"
                       className="mx-0 my-0 text-light">Show profile</Button>
            </section>
         </Container>
      </Container>
   )
}

export default Home