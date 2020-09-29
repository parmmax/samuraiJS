import React, { useState } from 'react'
import PreLoader from '../../common/PreLoader/PreLoader'
import { Accordion, Button, Card } from 'react-bootstrap'

const AboutMe = (props) => {

   if (!props.profile) {
      return <PreLoader/>
   }

   return (
      <Card className="mb-3 text-center border-0 shadow bg-white">

         <Card.Header>
            <h5 className="font-weight-light text-center">About Me</h5>
         </Card.Header>

         <Card.Body>
            <p >
               {
                  props.profile.aboutMe != null
                     ? props.profile.aboutMe
                     : <small>This user did't right description about himself
                        yet. We hope, it w'll be later</small>
               }
            </p>
            <small className="font-weight-light">
               <p className="">Looking for a Job: {' '}
                  {
                     props.profile.lookingForAJob === true
                        ? ' Yes '
                        : 'No'
                  }
               </p>
               <p className="font-weight-light">Description:{' '}
                  {
                     props.profile.lookingForAJobDescription != null
                        ? props.profile.lookingForAJobDescription
                        : 'No'
                  }
               </p>
            </small>
         </Card.Body>
      </Card>
   )
}

export default AboutMe