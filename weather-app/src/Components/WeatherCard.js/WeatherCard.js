import React from 'react'
import './WeatherCard.css'
import {GrClose} from 'react-icons/gr'
import {FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'
export default function WeatherCard() {
  
 const tempo ={
  "by": "default",
  "valid_key": true,
  "results": {
    "temp": 18,
    "date": "13/04/2021",
    "time": "18:34",
    "condition_code": "30",
    "description": "Parcialmente nublado",
    "currently": "noite",
    "cid": "",
    "city": "Sao Paulo, SP",
    "img_id": "30n",
    "humidity": 80,
    "wind_speedy": "18 km/h",
    "sunrise": "6:19 am",
    "sunset": "5:55 pm",
    "condition_slug": "cloudly_night",
    "city_name": "Sao Paulo",
    "forecast": [
      {
        "date": "13/04",
        "weekday": "Ter",
        "max": 20,
        "min": 16,
        "description": "Trovoadas dispersas",
        "condition": "storm"
      },
      {
        "date": "14/04",
        "weekday": "Qua",
        "max": 23,
        "min": 14,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
      },
      {
        "date": "15/04",
        "weekday": "Qui",
        "max": 24,
        "min": 15,
        "description": "Tempo nublado",
        "condition": "cloud"
      },
      {
        "date": "16/04",
        "weekday": "Sex",
        "max": 25,
        "min": 14,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
      },
      {
        "date": "17/04",
        "weekday": "Sáb",
        "max": 26,
        "min": 15,
        "description": "Tempo nublado",
        "condition": "cloud"
      },
      {
        "date": "18/04",
        "weekday": "Dom",
        "max": 23,
        "min": 16,
        "description": "Alguns chuviscos",
        "condition": "rain"
      },
      {
        "date": "19/04",
        "weekday": "Seg",
        "max": 21,
        "min": 16,
        "description": "Tempo nublado",
        "condition": "cloud"
      },
      {
        "date": "20/04",
        "weekday": "Ter",
        "max": 19,
        "min": 15,
        "description": "Alguns chuviscos",
        "condition": "rain"
      },
      {
        "date": "21/04",
        "weekday": "Qua",
        "max": 20,
        "min": 15,
        "description": "Parcialmente nublado",
        "condition": "cloudly_day"
      },
      {
        "date": "22/04",
        "weekday": "Qui",
        "max": 21,
        "min": 15,
        "description": "Trovoadas dispersas",
        "condition": "storm"
      }
    ]
  },
  "execution_time": 0.0,
  "from_cache": true
}
 
  return (
    <div className="weather-card-container">
      <div className="weather-card-content-wrapper">
        <header className="weather-card-header">
          <span className="info-style">{tempo.results.city}</span>
          <button ><GrClose/></button>
        </header>
        <h2>{tempo.results.temp} C° {tempo.results.description}</h2>
        <div className="weather-card-general-information">
            <div className="weather-max-min-wind-wrapper">
              <div className="weather-card-max-min-temperature">
                <span className="info-style">
                  <FaLongArrowAltDown color="orange"/>
                  {tempo.results.forecast[0].min}°
                </span>
                <span className="info-style">
                  <FaLongArrowAltUp color="orange"/>
                  {tempo.results.forecast[0].max}°
                </span>
              </div>
              <span>
                Vento 
                <span> </span>
                <span className="info-style">
                  {tempo.results.wind_speedy}
                </span>
              </span>
            </div>
            <span>
              Humidade 
              <span> </span>
              <span className="info-style">
                {tempo.results.humidity}%
              </span>
            </span>
        </div>
        <footer className="weather-card-footer">
          <ul className="weather-card-week-days-temp">
            <li>
              <p className="weather-card-week-days-name">Domingo</p>
                <div className="week-days-max-min-container">
                <span className="week-days-temp-style">18°</span>
                <span className="week-days-temp-style">20°</span>
              </div>
            </li>
            <li>
                <p className="weather-card-week-days-name">Domingo</p>
                <div className="week-days-max-min-container">
                <span className="week-days-temp-style">18°</span>
                <span className="week-days-temp-style">20°</span>
              </div>
            </li>
            <li>
                <p className="weather-card-week-days-name">Domingo</p>
                <div className="week-days-max-min-container">
                <span className="week-days-temp-style">18°</span>
                <span className="week-days-temp-style">20°</span>
              </div>
            </li>
            <li>
                <p className="weather-card-week-days-name">Domingo</p>
                <div className="week-days-max-min-container">
                <span className="week-days-temp-style">18°</span>
                <span className="week-days-temp-style">20°</span>
              </div>
            </li>
            <li>
                <p className="weather-card-week-days-name">Sábado</p>
                <div className="week-days-max-min-container">
                <span className="week-days-temp-style">18°</span>
                <span className="week-days-temp-style">20°</span>
              </div>
            </li>
          </ul>
        </footer>
      </div>
     
    
    </div>
  )
}
