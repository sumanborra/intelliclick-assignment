

import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
const city = ["germany","america","astria","india","dubai"]
const Weather = (props) =>{
    const[weatherData, setWeatherData] = useState({})
    
    useEffect(() =>{
        const getWeatherData = async () =>{
            const random = Math.ceil(Math.random() * city.length-1)
            const randomCity = city[random]
            const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=660996ea5a468eb84b425398a2ce59df`)
            if(result.status === 200){
                const convertedData = await result.json();
                const filteringData = {
                    lontitue: convertedData.coord.lon,
                    latitue:convertedData.coord.lat,
                    temperature: convertedData.main.temp,
                    feelsLike: convertedData.main.feels_like,
                    minTemperatur:convertedData.main.temp_min,
                    maxTemperature:convertedData.main.temp_max,
                    humiduty:convertedData.main.humidity,
                    pressure:convertedData.main.pressure,
                    sunrise:convertedData.sys.sunrise,
                    sunset:convertedData.sys.sunset,
                    windSpeed:convertedData.wind.speed,
                    windDegre:convertedData.wind.deg
                }
                setWeatherData(filteringData)
                
            }
        }
        getWeatherData();
    },[])

    return (
        <div className="weather-report-page-main-container">
            <h1 className="countres-text weather-text">Weather Report In the City</h1>
            <div className="card-main-container-for-wind">
            <div className="widn-data-container">
                <p className="air-auality-para-text">Air Quality:</p>
                <div className="air-data-container">
                <p className="air-auality-para-text">Wind Speed: <span className="air-qualiti-data-para-text">{weatherData.windSpeed}</span> km/hr</p>
                <p className="air-auality-para-text">Wind Degree: <span className="air-qualiti-data-para-text">{weatherData.windDegre}</span><sup>o</sup></p>
                </div>

            </div>
            <div className="widn-data-container temperature-container">
                <p className="air-auality-para-text">Temperature:</p>
                <div className="air-data-container">
                <p className="air-auality-para-text">Total Temperature: {weatherData.temperature}</p>
                <p className="air-auality-para-text">MIN TEMP: <span className="air-qualiti-data-para-text">{weatherData.minTemperatur}</span><sup>o</sup>C</p>
                <p className="air-auality-para-text">MAX TEMP: <span className="air-qualiti-data-para-text">{weatherData.maxTemperature}</span><sup>o</sup>C</p>
                </div>

            </div>
            </div>
            <div className="card-main-container-for-wind">
            <div className="widn-data-container clouds-container">
                <p className="air-auality-para-text">Air Mesurements:</p>
                <div className="air-data-container">
                <p className="air-auality-para-text">Lontitude: <span className="air-qualiti-data-para-text">{weatherData.lontitue}</span><sup>o</sup></p>
                <p className="air-auality-para-text">Latitude: <span className="air-qualiti-data-para-text">{weatherData.latitue}</span><sup>o</sup></p>
                </div>

            </div>
            <div className="widn-data-container sunrise-container">
                <p className="air-auality-para-text">Sunreise & Sunset:</p>
                <div className="air-data-container">
                <p className="air-auality-para-text">Total Pressure: {weatherData.pressure}</p>
                <p className="air-auality-para-text">SUN RISE: <span className="air-qualiti-data-para-text">{weatherData.sunrise}</span></p>
                <p className="air-auality-para-text">SUN SET: <span className="air-qualiti-data-para-text">{weatherData.sunset}</span></p>
                </div>

            </div>
            </div>
            <div className="widn-data-container feels-like-container">
                <p className="air-auality-para-text">Weather Report</p>
                <div className="air-data-container">
                
                <p className="air-auality-para-text">Feels Like: <span className="air-qualiti-data-para-text">{weatherData.feelsLike}</span></p>
                <p className="air-auality-para-text">Humidity: <span className="air-qualiti-data-para-text">{weatherData.humiduty}</span></p>
                </div>
            </div>
        </div>
    )

}
export default Weather;