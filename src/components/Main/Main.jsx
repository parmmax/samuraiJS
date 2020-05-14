import React from "react";

import classes from './Main.module.css';

const Main = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title1}>
                <h1>pen<span>S</span>cript</h1>
            </div>
            <div className={classes.title2}>
                <h3>The project was created using</h3>
                <h3>React-Redux</h3>
            </div>
        </div>
    )
};

export default Main