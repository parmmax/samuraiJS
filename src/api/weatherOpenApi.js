import * as axios from 'axios'

const instans = axios.create({
   baseURL: 'https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286',
   withCredentials: true,
   headers: {
      'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
      'x-rapidapi-key': 'e57de2d6d8msh73fc3bcac12ea42p1d9608jsnd36d6010d8ff',
   },
})

// debugger;
export const weatherOpenApi = {
   getWeather () {
      return instans.get().then(response => {
         console.log(response)
      })
   }
}