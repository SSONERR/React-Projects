import React from 'react'
import { useWeather } from './context/WeatherContext'

function Nameİnput() {
    const { nameInput, data, handleInputBlur, handleInputKeyPress } = useWeather()

    return (
        <>
            <input
                type="text"
                ref={nameInput}
                defaultValue={data.name}
                onBlur={handleInputBlur}
                onKeyUp={handleInputKeyPress}
            />
        </>
    )
}

export default Nameİnput