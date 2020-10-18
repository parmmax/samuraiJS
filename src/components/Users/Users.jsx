import React from 'react'
import {
   Container,
   Button,
   NavLink,
} from 'react-bootstrap'
import Pager from '../common/Pager/Pager.tsx'
import PreLoader from '../common/PreLoader/PreLoader'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Users = (props) => {

   if (props.isFetching) {
      return <PreLoader/>
   }

   return (
      <Container className="col-sm-12 col-md-10 col-lg-8 py-4 min-vh-100">
         <section id="users">
            <header className="text-center">
               <hr/>
               <h2
                  className="display-4 font-family-secondary text-primary font-weight-light">Users</h2>
               <p className="text-muted">
                  In this page, you can find all
                  registered peoples on{' '}
                  <a href="https://social-network.samuraijs.com/"
                     className="text-link">Social Network API</a>
               </p>
               <Button variant="outline-secondary"
                       href="/profile"
                       size="sm"
               >
                  Back to profile
               </Button>
               {/*<hr/>*/}
            </header>
            <article>
               <div className="d-flex justify-content-center">
                  <Pager
                     activePage={props.activePage}
                     countPerPage={props.countPerPage}
                     totalCount={props.totalCount}
                     onPageChanged={props.onPageChanged}
                  />
               </div>
               <div className="d-flex flex-column justify-content-center">
                  {
                     props.users.map(u =>
                        <div key={u.id}
                             className="mb-3 p-2 bg-transparent shadow rounded-lg ">
                           <div
                              className="d-flex justify-content-between align-items-center">
                              <div className="d-flex align-items-center">
                                 <div>
                                    <NavLink href={'/profile/' + u.id}>
                                       {u.photos.small != null
                                          ?
                                          <img
                                             className="avatar-small rounded-circle"
                                             src={u.photos.small}
                                             alt="user"/>
                                          :
                                          <FontAwesomeIcon
                                             className="rounded-circle text-light"
                                             icon={faUser} size="2x"/>}
                                    </NavLink>
                                 </div>
                                 <div>
                                    <NavLink href={'/profile/' + u.id}
                                    className="text-white">
                                       {u.name}
                                    </NavLink>
                                    <small
                                       className="text-muted font-italic">
                                       {u.status === null
                                          ? '- No status yet'
                                          : u.status
                                       }
                                    </small>
                                 </div>
                              </div>
                              <div className="d-flex">
                                 {u.followed
                                    ?
                                    <Button
                                       disabled={props.followingInProgress.some(
                                          id => id === u.id)}
                                       className="text-weight-light border-0"
                                       variant="outline-secondary"
                                       size="sm"
                                       onClick={() => {
                                          props.getUnFollow(u.id)
                                       }}>Following</Button>
                                    :
                                    <Button
                                       disabled={props.followingInProgress.some(
                                          id => id === u.id)}
                                       className="text-weight-light border-0"
                                       variant="outline-secondary"
                                       size="sm"
                                       onClick={() => {
                                          props.getFollow(u.id)
                                       }}>Follow</Button>
                                 }
                              </div>
                           </div>
                        </div>,
                     )
                  }
               </div>
            </article>
         </section>
      </Container>
   )

}

export default Users