import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list}>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                             to="/profile">Profile</NavLink></li>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                             to="/messages">Messages</NavLink></li>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                             to="/users">Users</NavLink></li>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                    to="/projects">Projects</NavLink></li>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                             to="/media">Media</NavLink></li>
                <li><NavLink className={classes.link}
                             activeClassName={classes.active}
                             to="/settings">Settings</NavLink></li>
            </ul>


            {/*<NavLink className={classes.link} activeClassName={classes.active}*/}
            {/*         to="/login">Log in</NavLink>*/}
            {/*<NavLink className={classes.link} activeClassName={classes.active}*/}
            {/*         to="/registration">Sing Up</NavLink>*/}


        </nav>
    );
};

export default Navigation