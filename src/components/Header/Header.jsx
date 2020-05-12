import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import Navigation from "./Navigation/Navigation";

// classes - это объект
// Все значения module.css лежат внутри classes
// Объект состоит из:
// 'ключ'

const Header = () => {
    return (
        <div className={classes.headerWrap}>
            <div className={classes.header}>
                <NavLink className={classes.logoWrap} to='/home'>
                    {/*<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="feather-alt"*/}
                    {/*     className={classes.svgLogo} role="img" xmlns="http://www.w3.org/2000/svg"*/}
                    {/*     viewBox="0 0 512 512" width="40px" height="40px">*/}
                    {/*    <path fill="currentColor"*/}
                    {/*          d="M512 0C460.22 3.56 96.44 38.2 71.01 287.61c-3.09 26.66-4.84 53.44-5.99 80.24l178.87-178.69c6.25-6.25 16.4-6.25 22.65 0s6.25 16.38 0 22.63L7.04 471.03c-9.38 9.37-9.38 24.57 0 33.94 9.38 9.37 24.59 9.37 33.98 0l57.13-57.07c42.09-.14 84.15-2.53 125.96-7.36 53.48-5.44 97.02-26.47 132.58-56.54H255.74l146.79-48.88c11.25-14.89 21.37-30.71 30.45-47.12h-81.14l106.54-53.21C500.29 132.86 510.19 26.26 512 0z"/>*/}
                    {/*</svg>*/}
                    <div className={classes.penScript}>pen<span>S</span>cript</div>
                </NavLink>

                {/*NAVIGATION MENU ------------------------------ */}
                <Navigation/>


                {/*отдельная компонента для регистрации*/}
                <div>
                    <div>
                        <NavLink to='/singIn'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt"
                                 className={classes.singIn} role="img"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"/>
                            </svg>
                        </NavLink>
                    </div>
                    {/*<div></div>*/}
                </div>
            </div>
        </div>
    );
}

export default Header;