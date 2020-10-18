import React from 'react'
import {
   faCalendarCheck,
   faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const Post = (props) => {
   return (
      <div className="py-2">
         <header className="mb-2 text-muted flex-row">
            <FontAwesomeIcon className="mr-1" icon={faCalendarCheck} size="1x"/>
            <small>{props.date}</small>
         </header>
         <main>
            {props.post}
         </main>
         <footer className="d-flex justify-content-between">
            <aside>
               <small className="text-note">{props.likesCounts}</small>
               <FontAwesomeIcon className="text-note mx-2" icon={faHeart}
                                size="1x"/>
            </aside>
            <aside>
               <Button disabled type="edit" value="edit" variant="outline-primary"
                       size="sm"
                       className="bg-transparent text-right border-0">Edit</Button>
               <Button disabled type="reset" value="reset" variant="outline-primary"
                       size="sm"
                       className="bg-transparent text-right border-0">Reset</Button>
            </aside>
         </footer>
      </div>
   )
}

export default Post