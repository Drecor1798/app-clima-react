import React, { useState } from 'react'
import './WeatherApp.css'

export const WeathwerApp = () => {

  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  const UrlBase = 'https://api.openweathermap.org/data/2.5/weather';
  const APY_KEY = '822bb872b1d4f07234e5b07927c1c48b'
  const difKelvin = 273.15 

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${UrlBase}?q=${city}&appid=${APY_KEY}&lang=es`)
      const data = await response.json()
      console.log(data)
      setWeatherData(data)
    } catch (error) {
      console.error('Ha habido un error: ',error)
    }
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    fetchWeatherData()
  }

  return (
    <>
    <div className='container'>
      <h1>Aplicacion del clima</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa una ciudad' value={city} onChange={handleCityChange}/>
        <button type='submit'>Buscar</button>
      </form>

      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>La temperatura actual es { Math.floor(weatherData.main.temp - difKelvin) }°C</p>
          <p>La condicion meteororlogica actual: {weatherData.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />
        </div>
      )}
    </div>
    
    </>
  )
}
