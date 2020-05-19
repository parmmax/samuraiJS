import React from "react";
import classes from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user-png-icon-male-user-icon-512.png'

const Users = (props) => {

    let setUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    };

    return (
        <div className={classes.wrapper}>
            <h4>Users</h4>
            <div className={classes.btnGetUsersWrapper}>
                <button className={classes.btnGetUsers} onClick={setUsers}>Get Users</button>
            </div>
            {
                props.users.map(u => <div key={u.id}
                                          className={classes.uContainer}>
                    <div className={classes.uAbout}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 alt="User Photo"/>
                        </div>
                        <div className={classes.uAboutInfo}>
                            <div>{u.name}</div>
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