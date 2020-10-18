import React from 'react'
import PreLoader from '../../common/PreLoader/PreLoader'
import { Card } from 'react-bootstrap'

const AboutMe = (props) => {

   if (!props.profile) {
      return <PreLoader/>
   }

   return (
      <section className="mb-3 p-4 rounded-sm w-100">
         <header className="border-bottom border-primary">
            <h3 className="font-family-secondary font-weight-bold text-center mb-0">about <span className="text-primary">M</span>e</h3>
         </header>

         <Card.Body>
            <>
               {
                  props.profile.aboutMe != null
                     ? props.profile.aboutMe
                     : 'No description'
               }
            </>
            <br/>
            <>
               {
                  props.profile.lookingForAJob === true
                     ? 'Looking for a Job'
                     : 'I have job'
               }
            </>
            <br/>
            <>
               {
                  props.profile.lookingForAJobDescription != null
                     ? <>Description: {props.profile.lookingForAJobDescription}</>
                     : <>Description: {'No'}</>
               }
            </>
         </Card.Body>
      </section>
   )
}

export default AboutMe