import React from "react";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

const Post = (props) => {
    return (
        <div className="py-2">
            <header className="mb-2 text-primary">
               <small>{props.date}</small>
            </header>
           <main>
              {props.post}
           </main>
            <footer className="d-flex justify-content-between">
                <aside>
                    <small className="text-secondary">{props.likesCounts}</small>
                    <FontAwesomeIcon className="text-secondary mx-2" icon={faHeart} size="1x" />
                </aside>
                <aside>
                    <Button type="edit" value="edit" variant="outline-secondary" size="sm" className="bg-transporent text-right border-0">Edit</Button>
                    <Button type="reset" value="reset" variant="outline-secondary" size="sm" className="bg-transporent text-right border-0">Reset</Button>
                </aside>
            </footer>
        </div >
    )
};

export default Post