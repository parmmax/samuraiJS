import { getAuth } from './authReducer'

const SET_INITIALIZE_APP = 'SET_INITIALIZE_APP';

let initialState = {
   initialize: false
};

const appReducer = (state = initialState, action) => {


   switch (action.type) {
      case SET_INITIALIZE_APP: {
         return {
            ...state,
            initialize: true,
         }
      }

      default:
         return state;
   }
};
export const setInitializeApp = () => ({ type: 'SET_INITIALIZE_APP' });

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuth());
   // another promise...
   Promise.all([promise])
   .then( () => {
      dispatch(setInitializeApp());
   })
}


export default appReducer;