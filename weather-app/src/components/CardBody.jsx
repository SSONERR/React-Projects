import React from 'react'
import { useWeather } from './context/WeatherContext'
import Alert from './Alert'
import Üst from "./Üst"
import ImgBox from './ImgBox'
import Alt from './Alt'

function CardBody() {
    const { data } = useWeather()
    return (
        <>
            {data && (
                <div className='card'>
                    <div>
                        <Üst></Üst>
                        <ImgBox></ImgBox>
                        <Alt></Alt>
                        <Alert></Alert>
                    </div>

                </div>
            )}
        </>
    )
}

export default CardBody