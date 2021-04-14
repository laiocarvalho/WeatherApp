import './App.css';
import WeatherCard from './Components/WeatherCard.js/WeatherCard';
import {WeatherInfoContainer} from './Providers/WeatherInfoProvider'

function App() {
  return (
    <WeatherInfoContainer.Provider>
      <div className="App">
        <h1 className="app-title">Previsão do Tempo</h1>
      <WeatherCard/>
      </div>
    </WeatherInfoContainer.Provider>
  );
}

export default App;
