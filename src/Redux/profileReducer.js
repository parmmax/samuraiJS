import { toggleIsFetching } from './usersReducer'
import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
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
         post: 'Efficiently leverage existing inexpensive data with economically sound e-business. Objectively maximize high-payoff human capital rather than turnkey "outside the box" thinking. Proactively foster world-class products and interoperable convergence. Assertively underwhelm 2.0 metrics rather than leveraged e-tailers. Authoritatively reintermediate.',
         date: '14.03.2020',
         likesCounts: '11 ',
      },
      {
         id: 3,
         post: 'Completely morph distinctive vortals before mission-critical information. Seamlessly customize technically sound interfaces before proactive convergence. Globally expedite open-source e-commerce and empowered infrastructures. Progressively myocardinate next-generation resources vis-a-vis impactful e-business. Compellingly reinvent next-generation innovation before distributed metrics.\n' +
            '\n' +
            'Appropriately disintermediate global niches before focused solutions. Intrinsicly monetize scalable bandwidth with revolutionary models. Quickly monetize optimal scenarios and value-added models. Interactively matrix highly efficient experiences with viral content. Intrinsicly target out-of-the-box niches whereas resource sucking outsourcing.\n' +
            '\n' +
            'Professionally enable cross-unit platforms with technically sound synergy. Intrinsicly maintain magnetic paradigms without parallel resources. Completely formulate functional schemas before bleeding-edge action items. Progressively generate adaptive "outside the box" thinking whereas turnkey experiences. Seamlessly seize wireless imperatives for performance based e-tailers.\n' +
            '\n' +
            'Dynamically maintain adaptive internal or "organic" sources without visionary metrics. Synergistically engineer effective best practices rather than open-source information. Compellingly empower scalable portals with cross-unit metrics.',
         date: '30.09.2020',
         likesCounts: '3 ',
      },
   ],
   newPostText: '',
   status: ''
}

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         return {
            ...state,
            posts: [
               ...state.posts,
               {
                  id: 10,
                  post: state.newPostText,
                  date: state.date,
                  likesCounts: '0',
               }],
            newPostText: '',
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText,
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

export const addPostActionCreator = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCreator = (newTextFromTextareaNewPost) => ({
   type: 'UPDATE_NEW_POST_TEXT',
   newText: newTextFromTextareaNewPost,
})
export const setUserProfile = (profile) => ({ type: 'SET_USER_PROFILE', profile, })
export const setStatus = (status) => ({type: 'SET_STATUS', status})

// Thunks

export const getProfile = (userId) => {
   return (dispatch) => {
      dispatch(toggleIsFetching(true))
      profileAPI.getProfile(userId).then(response => {
         console.log(response.data)
         dispatch(toggleIsFetching(false))
         dispatch(setUserProfile(response.data))
      })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId).then(response => {
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