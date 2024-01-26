import React from 'react'
import { useWeather } from './context/WeatherContext'

function Alert() {
    const { alert } = useWeather()
    return (
        <>
            {alert && (
                <div id='alert' >
                    Şehir Bulunamadı
                </div>
            )}
        </>
    )
}

export default Alert