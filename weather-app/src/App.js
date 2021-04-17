import './App.css';
import SearchCityInput from './Components/SearchCityInput/SearchCityInput';
import WeatherCard from './Components/WeatherCard.js/WeatherCard';
import {WeatherInfoContainer} from './Providers/WeatherInfoProvider'
import {useState, useEffect} from 'react'
import {FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'
function App() {
  const [WeatherCardVisibility, setWeatherCardVisibility] = useState(false);
  const [CapitalsInformation, setCapitalsInformation] = useState([])

  const getCapitalsTemperature = async () =>{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/group?id=3448433,3451189,2270968,3410315,3405863,3450554,3464975,3399415,3663517,3397277&units=metric&lang=pt_br&appid=eed14c3390526d1af12663998f46badb`);
    const data = await response.json();
    setCapitalsInformation(data.list)
    console.log(data.list)
  
  }


  // const formataCapitalsTemp =()=>{
  //   const tempformatada = CapitalsInformation.map((info)=>{
  //     return info.main.temp_max
  //   });
  //   console.log(tempformatada.map((e)=>Math.trunc(e)))
  


  // }

  useEffect(() => {
    getCapitalsTemperature()
  }, [])

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
        <div className="capitals-information-container">
          <h2 className="capitals-container-title">Capitais</h2>
          <div>
            <ul className="capitals-list">
              {CapitalsInformation.map((capitalsInfo, i)=>(
                <li key={i}>
                  <div className="capitals-temperature-container">
                    <span>
                       <FaLongArrowAltDown/> {`${Math.trunc(capitalsInfo.main.temp_min)}º`}
                    </span>
                    <span>
                    <FaLongArrowAltUp/> {`${Math.trunc(capitalsInfo.main.temp_max)}º`}
                    </span>
                    {capitalsInfo.name === "State of Rio de Janeiro" ? "Rio de Janeiro": capitalsInfo.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
    </WeatherInfoContainer.Provider>
  );
}

export default App;
