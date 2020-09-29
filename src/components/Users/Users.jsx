import React from 'react'
import {
   Container,
   Row,
   Col,
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
      <Container className="py-4 min-vh-100">
         <section id="users">
            <header>
               <h3 className="display-4 font-weight-light">Users</h3>
               <p className="text-muted">In this page, you can find all
                  registered peoples on <a
                     href="https://social-network.samuraijs.com/"
                     className="text-link">Social Network API</a></p>
               <Button variant="outline-primary" href="/profile">Back to
                  profile</Button>
               <hr/>
            </header>
            <article>
               <Row>
                  <Col className="d-flex justify-content-end">
                     <Pager
                        activePage={props.activePage}
                        countPerPage={props.countPerPage}
                        totalCount={props.totalCount}
                        onPageChanged={props.onPageChanged}
                     />
                  </Col>
               </Row>
               <Row>
                  <Col>
                     {
                        props.users.map(u =>
                           <div key={u.id}
                                className="mb-3 p-2 bg-light shadow rounded-lg">
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
                                                className="rounded-circle text-dark"
                                                icon={faUser} size="2x"/>}
                                       </NavLink>
                                    </div>
                                    <div>
                                       <NavLink
                                          href={'/profile/' +
                                          u.id}>{u.name}</NavLink>
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
                  </Col>
               </Row>
            </article>
         </section>
      </Container>
   )

}

export default Users