import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            // debugger;
            props.setUsers(response.data.items);
        });
    }

    return (
        <div className={classes.wrapper}>
            <h4>Users</h4>
            {
                props.users.map(u => <div key={u.id}
                                          className={classes.uContainer}>
                    <div className={classes.uAbout}>
                        <div>
                            <img src={ u.photos.small != null ? u.photos.small : "./UserAvatarSmall.png"}
                                 alt="User Avatar"/>
                        </div>
                        <div className={classes.uAboutInfo}>
                            <div>{u.Name}</div>
                            {/*<div>{u.location.cityName}, {u.location.country}</div>*/}
                            <div>{u.status}</div>
                        </div>
                    </div>
                    <div className={classes.uFollow}>
                        {u.followed
                            ? <button className={classes.btnUnFollow}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>unfollow</button>
                            : <button className={classes.btnFollow}
                                      onClick={() => {
                                          props.follow(u.id)
                                      }}>follow</button>
                        }
                    </div>
                </div>)
            }
        </div>
    )
};

export default Users