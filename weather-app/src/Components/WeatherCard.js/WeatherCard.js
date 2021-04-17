import React, {useState} from 'react'
import './WeatherCard.css'
import {GrClose} from 'react-icons/gr'
import {FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'
import {useContainer} from 'unstated-next'
import {WeatherInfoContainer} from '../../Providers/WeatherInfoProvider'

export default function WeatherCard({setWeatherCardVisibility}) {


  const {
    WeatherInformation, 
    NextDaysWeather,
    loading,
    CapitalsInformation,
    CurrentDay
  } = useContainer(WeatherInfoContainer);
 

  
  return (
   <>
    {loading 
    ? "Carregando"
    : WeatherInformation.by === "default"
    ? <div className="weather-card-container-error"> 
        <h2 className="weather-card-error-message">Insira uma cidade válida</h2>
        <button 
          onClick={() => {
            setWeatherCardVisibility()
          }}>
          <GrClose/>
        </button>
      </div>
    : <div className="weather-card-container">
        <div className="weather-card-content-wrapper">
          <header className="weather-card-header">
            <span className="info-style">{WeatherInformation.results.city}</span>
            <button 
              onClick={() => setWeatherCardVisibility() }>
              <GrClose/>
            </button>
          </header>
          <h2 className="current-day-temp-description">{WeatherInformation.results.temp} C° {WeatherInformation.results.description}</h2>
          <div className="weather-card-general-information">
              <div className="weather-max-min-wind-wrapper">
                <div className="weather-card-max-min-temperature">
                  <span className="info-style">
                    <FaLongArrowAltDown color="orange"/>
                    {CurrentDay[0].min}°
                  </span>
                  <span className="info-style">
                    <FaLongArrowAltUp color="orange"/>
                    {CurrentDay[0].max}°
                  </span>
                </div>
                <span>
                  Vento 
                  <span> </span>
                  <span className="info-style">
                    {WeatherInformation.results.wind_speedy}
                  </span>
                </span>
              </div>
              <span>
                Humidade 
                <span> </span>
                <span className="info-style">
                  {WeatherInformation.results.humidity}%
                </span>
              </span>
          </div>
          <footer className="weather-card-footer">
            <ul className="weather-card-week-days-temp">
              {NextDaysWeather.map((weather)=>(
                <li key={NextDaysWeather.date}>
                  <p className="weather-card-week-days-name">{weather.weekday}</p>
                  <div className="week-days-max-min-container">
                    <span className="week-days-temp-style">{weather.min}°</span>
                    <span className="week-days-temp-style">{weather.max}°</span>
                  </div>
                </li>
              ))}
            </ul>
          </footer>
        </div>
      </div>
    }  
   </>
  )
}
