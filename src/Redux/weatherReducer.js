import { weatherOpenApi } from '../api/weatherOpenApi'

const SET_WEATHER = 'SET_WEATHER'

let initialState = {
   data: null,
}

const weatherReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_WEATHER: {
         return { ...state, data: action.data }
      }

      default:
         return state
   }
}

export const setWeather = (data) => ({ type: 'SET_WEATHER', data })

// Thunk Creator
export const getWeather = () => {
   // Thunk
   return (dispatch) => {
      weatherOpenApi.getWeather()
      .then(response => {
         dispatch(setWeather(response))
         console.log(response)
      })
   }
}

export default weatherReducer;