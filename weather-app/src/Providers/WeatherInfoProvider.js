import {createContainer} from 'unstated-next'

const WeatherInfoProvider = () =>{
  
  const getWeatherInfo = async ()=>{
    const response = await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=842f23dd&city_name=Campinas,SP`);
    const data = await response.json()
    console.log(data)
  }
  return {

  }
}

export const WeatherInfoContainer = createContainer(WeatherInfoProvider);