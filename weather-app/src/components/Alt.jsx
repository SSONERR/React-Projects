import React from 'react'
import { useWeather } from './context/WeatherContext'
import Clock from './Clock'

function Alt() {
    const { data } = useWeather()
    return (
        <>
            <div className='üst'>
                <div id='temp'>{data.main.temp.toFixed(0)}°C</div>
                {data && (
                    <Clock></Clock>
                )}
            </div>
        </>
    )
}

export default Alt