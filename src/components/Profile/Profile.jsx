import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import {
   Button,
   Card,
   Container,
   Form,
   FormControl,
   Nav,
   Navbar,
   Row,
} from 'react-bootstrap'
import PreLoader from '../common/PreLoader/PreLoader'
import AboutMe from './AboutMe/AboutMe'

const Profile = (props) => {

   if (!props.profile) {
      return <PreLoader/>
   }

   return (
      <Container className="py-4 min-vh-100">
         <section className="d-flex flex-column justify-content-start align-items-center w-100">
            <Row>
               <aside className="col-lg-3 col-md-4 col-sm-12">
                  <ProfileInfo profile={props.profile}/>
                  <AboutMe profile={props.profile}
                           getProfile={props.getProfile}/>
               </aside>
               <main className="col-lg-6 col-md-4 col-sm-12">
                  <MyPostsContainer/>
               </main>
               <aside className="col-lg-3 col-md-3 col-sm-12">
                  <Navbar bg="transporent" className="shadow rounded-sm w-100 bg-white">
                     <Nav className="p-1 flex-column ">
                        <Nav.Link className="text-primary p-0" href="/users">Users</Nav.Link>
                        <Nav.Link className="text-primary p-0" href="/messages">Messages</Nav.Link>
                        <Nav.Link className="text-primary p-0" href="/projects">Projects</Nav.Link>
                        <Nav.Link className="text-secondary p-0" href="/profile/2">Dimych's profile</Nav.Link>
                        {/*<Nav.Link className="text-primary p-0" href="/projects">Projects</Nav.Link>*/}
                     </Nav>
                  </Navbar>
               </aside>
            </Row>
         </section>
      </Container>
   )
}

export default Profile