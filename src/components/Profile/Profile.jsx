import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Container, Row } from 'react-bootstrap'
import PreLoader from '../common/PreLoader/PreLoader'
import AboutMe from './AboutMe/AboutMe'
import { Sidebar } from '../common/Sidebar/Sidebar'

const Profile = (props) => {

   if (!props.profile) {
      return <PreLoader/>
   }

   return (
      <Container className="py-4 min-vh-100">
         <section
            className="d-flex flex-column justify-content-start align-items-center w-100">
            <Row>
               <aside className="position-relative col-lg-2 col-md-2 col-sm-2">
                  <Sidebar/>
               </aside>
               <article className="py-0 col-lg-10 col-md-10 col-sm-10">
                  <Row>
                     <aside className="col-lg-4 col-md-4 col-sm-12">
                        <ProfileInfo profile={props.profile}/>
                        <AboutMe profile={props.profile} getProfile={props.getProfile}/>
                     </aside>
                     <article className="py-0 col-lg-8 col-md-8 col-sm-12">
                        <MyPostsContainer/>
                     </article>
                  </Row>
               </article>
               {/*<aside className="col-lg-3 col-md-3 col-sm-12">*/}
               {/*   */}
               {/*</aside>*/}
            </Row>
         </section>
      </Container>
   )
}

export default Profile