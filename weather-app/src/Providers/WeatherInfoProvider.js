import {createContainer} from 'unstated-next'
import {useState, useEffect} from 'react'
import json from './city.list.json'

const WeatherInfoProvider = () =>{
  const [WeatherInformation, setWeatherInformation] = useState([]);
  const [CityName, setCityName] = useState();
  const [FetchController, setFetchController] =  useState(false);
  const [NextDaysWeather, setNextDaysWeather] = useState([]);
  const [CurrentDay, setCurrentDay] = useState();
  const [loading, setLoading] = useState(true);


  const getWeatherInfo = async ()=>{
    const response = 
    await fetch(`https://api.hgbrasil.com/weather?format=json-cors&key=4a5d6ef6&city_name=${CityName}`);
    const data = await response.json()
    const nextDays = data.results.forecast;
    nextDays.slice(1,5)
    setCurrentDay(nextDays.slice(0))
    console.log(CurrentDay)
    setNextDaysWeather(nextDays.slice(1,6))
    setCurrentDay(nextDays.slice(0,1))
    setWeatherInformation(data);
    console.log(data)
    setLoading(false);
    setFetchController(false)
    setCityName("")
  }

  const getCityName = event =>{
    setCityName(event.target.value)
    console.log(CityName)
  }

  
  useEffect(() => {
    if(FetchController === true){
      getWeatherInfo();
    }
  }, [FetchController])
 
  return {
    WeatherInformation,
    NextDaysWeather,
    loading,
    CurrentDay,
    getCityName,
    setFetchController,
    setCityName,
    CityName,
  }
}

export const WeatherInfoContainer = createContainer(WeatherInfoProvider);