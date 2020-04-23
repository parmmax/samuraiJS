import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={classes.profileInfoWrap}>
            <div className={classes.avaBox}>
                <img className={classes.avatar}
                     src="https://images.unsplash.com/photo-1526956159426-b7d06370c2d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                     alt="imgAvatar"/>
            </div>
            <section className={classes.personalInfo}>
                <div className={classes.name}>
                    <div className={classes.first}>Maxim</div>
                    <div className={classes.last}>Parmakliy</div>
                </div>
                <div className={classes.item}>february, 5th</div>
                <div className={classes.item}>Republic of JavaScript</div>
            </section>
        </div>
    )
};

export default ProfileInfo