import React from 'react'
import { useWeather } from './context/WeatherContext'

function ImgBox() {

    const { data } = useWeather()
    return (
        <>
            <div id='imgBox'>
                <img src={`icons/${data.weather[0].icon}.svg`} alt='a'></img>
            </div>
        </>
    )
}

export default ImgBox