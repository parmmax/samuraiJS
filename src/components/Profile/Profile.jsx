import React from 'react'
import { Container} from 'react-bootstrap'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import AboutMe from './AboutMe/AboutMe'

const Profile = (props) => {

   return (
      <Container className="container m-auto py-4 min-vh-100 w-100">
         <section className="d-flex flex-row justify-content-center align-items-start col-lg-12 col-md-12 col-sm-12">
            <aside className="col-lg-4 col-md-4 col-sm-12">
               <ProfileInfo profile={props.profile}
                            status={props.status}
                            updateStatus={props.updateStatus}
               />
               <AboutMe profile={props.profile}
                        getProfile={props.getProfile}
               />
            </aside>
            <article className="py-0 col-lg-8 col-md-8 col-sm-12">
               <MyPostsContainer/>
            </article>
         </section>
      </Container>
   )
}

export default Profile