import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './SearchCityInput.css'
import {useContainer} from 'unstated-next'
import {WeatherInfoContainer} from '../../Providers/WeatherInfoProvider'

export default function ({setWeatherCardVisibility}) {
  const {getCityName,setFetchController, CityName} = useContainer(WeatherInfoContainer);
  return (
    <div className="input-container">
      <input 
        className="search-city-input" 
        placeholder="Insira aqui o nome da cidade"
        onInput ={getCityName}
        value={CityName}
      />
      <button 
        className="search-city-button" 
        onClick={() => {
          setWeatherCardVisibility(true)
          setFetchController(true)
        } }>
        <BsSearch/>
      </button>
    </div>
  )
}
