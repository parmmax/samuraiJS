import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Interlocuter.module.css';

const Interlocutor = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={classes.list}>
            <NavLink to={path} className={classes.link}
                     activeClassName={classes.active}>
                <img className={classes.avatar}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZG32SKDDbWTsBEd-PUgoqeubMnA6vwlBYrb-xUORxKtl5J-oi"
                     alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
};

export default Interlocutor