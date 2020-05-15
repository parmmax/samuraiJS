const followAC = 'FOLLOW';
const unfollowAC = 'UNFOLLOW';
const setUsersAC = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 1,
        //     followed: true,
        //     fullName: 'Ron G.',
        //     status: 'Happy Hacking',
        //     location: {city: 'Liverpool', country: 'England'}
        // },
        // {
        //     id: 2,
        //     followed: false,
        //     fullName: 'Mike F.',
        //     status: 'Happy Hacking',
        //     location: {city: 'New York', country: 'USA'}
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Fred D.',
        //     status: 'Happy Hacking',
        //     location: {city: 'Melbourne', country: 'Australia'}
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     fullName: 'Jack B.',
        //     status: 'Happy Hacking',
        //     location: {city: 'San Francisco', country: 'USA'}
        // },
        // {
        //     id: 5,
        //     followed: false,
        //     fullName: 'Greg C.',
        //     status: 'Happy Hacking',
        //     location: {city: 'London', country: 'England'}
        // },
    ]
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
};


    export const followAC = (userID) => ({type: 'FOLLOW', userID});
    export const unfollowAC = (userID) => ({type: 'UNFOLLOW', userID});
    export const setUsersAC = (users) => ({type: 'SET_USERS', users});

    export default userReducer;