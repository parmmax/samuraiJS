import { toggleIsFetching } from './usersReducer'
import { profileAPI } from '../../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
   profile: null,
   posts: [
      {
         id: 1,
         post: 'It\'s my first post',
         date: '14.03.2020',
         likesCounts: '5 ',
      },
      {
         id: 2,
         post: 'Interactively orchestrate resource maximizing alignments with distributed technology. Intrinsicly coordinate.',
         date: '14.03.2020',
         likesCounts: '11 ',
      },
      {
         id: 3,
         post: 'Completely formulate distributed benefits after high standards in manufactured products.',
         date: '30.09.2020',
         likesCounts: '3 ',
      },
   ],
   status: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let body = action.addPostBody
         return {
            ...state,
            posts: [
               ...state.posts,
               {
                  id: 10,
                  post: body,
                  date: state.date,
                  likesCounts: '0',
               }]
         }
      }
      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status,
         }
      }
      default:
         return state
   }
}

export const addPostActionCreator = (addPostBody) => ({ type: 'ADD_POST', addPostBody })
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile, })
export const setStatus = (status) => ({type: 'SET_STATUS', status})

// Thunks

export const getProfile = (userId) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      profileAPI.requestProfile(userId).then(response => {
         // console.log(response.data)
         dispatch(toggleIsFetching(false))
         dispatch(setUserProfile(response.data))
      })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.requestStatus(userId).then(response => {
         dispatch(setStatus(response.data))
      })
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status).then(response => {
         if(response.data.resultCode === 0) {
            dispatch(setStatus(status))
         }
      })
   }
}

export default profileReducer