import './App.css';
import SearchCityInput from './Components/SearchCityInput/SearchCityInput';
import WeatherCard from './Components/WeatherCard.js/WeatherCard';
import {WeatherInfoContainer} from './Providers/WeatherInfoProvider'
import {useState} from 'react'

function App() {
  const [WeatherCardVisibility, setWeatherCardVisibility] = useState(false);

  return (
    <WeatherInfoContainer.Provider>
      <div className="App">
        <h1 className="app-title">Previsão do Tempo</h1>
        {WeatherCardVisibility 
        ? <WeatherCard 
            setWeatherCardVisibility = {setWeatherCardVisibility}
          />
        :<></>
        }
      
      <SearchCityInput
        setWeatherCardVisibility = {setWeatherCardVisibility}
      />
      </div>
    </WeatherInfoContainer.Provider>
  );
}

export default App;
