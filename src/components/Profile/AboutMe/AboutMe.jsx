import React from 'react'
import PreLoader from '../../common/PreLoader/PreLoader'
import { Card } from 'react-bootstrap'

const AboutMe = (props) => {

   if (!props.profile) {
      return <PreLoader/>
   }

   return (
      <Card className="mb-3  border-0 shadow bg-white">
         <Card.Header>
            <h4 className="text-primary font-family-secondary font-weight-bold text-center">About Me</h4>
         </Card.Header>

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
      </Card>
   )
}

export default AboutMe