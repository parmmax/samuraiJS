import React from "react";

import classes from './Main.module.css';

const Main = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.title1}>
                <h1>pen<span>S</span>cript</h1>
            </div>
            <div className={classes.title2}>
                <h3>sponsored by YouTube channel</h3>
                <h3>It-Kamasutra</h3>
            </div>
            <div className={classes.author}>
                <div>Created by</div>
                <div>Maxim Parmakly</div>
            </div>
        </div>
    )
};

export default Main