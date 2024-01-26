import React from 'react'
import { useWeather } from './context/WeatherContext'
import Nameİnput from './Nameİnput'

function Üst() {
    const { editing, data, handleTextClick } = useWeather()
    return (
        <>
            <div className='üst'>
                <div id='cityName'>
                    {editing ? (
                        <Nameİnput></Nameİnput>
                    ) : (
                        <div onClick={handleTextClick}>{data.name}</div>
                    )}
                </div>
                <div id='weather'>{data.weather[0].description}</div>
            </div></>
    )
}

export default Üst