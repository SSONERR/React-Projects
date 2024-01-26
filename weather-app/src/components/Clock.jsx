import React from 'react'
import { useWeather } from './context/WeatherContext'

function Clock() {

    const { data, utcHour, time } = useWeather()
    return (
        <>
            <div id='clock'>
                {utcHour + (data.timezone / 60 / 60)}:{time.getMinutes()}:{time.getSeconds()}
            </div>
        </>
    )
}

export default Clock