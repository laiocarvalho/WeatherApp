import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './SearchCityInput.css'
export default function () {
  return (
    <div className="input-container">
      <input className="search-city-input" placeholder="Insira aqui o nome da cidade"/>
      <button className="search-city-button"><BsSearch/></button>
    </div>
  )
}
