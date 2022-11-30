import React from 'react'
import iconsUrl from '../API/iconURl'
import {TbTemperaturePlus,TbTemperatureMinus} from 'react-icons/tb'

function TempratureAndStatus({ weatherData: { weather, temp, temp_max, temp_min } }) {
    return (
        <div className='lg:mx-32 md:mx-32 sm:mx-24'>
            <div className='flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-6 text-white py-3'>
                <img
                    className='w-40'
                    alt=''
                    src={iconsUrl(weather[0].icon)}
                />
                <div className='text-center'>
                    <p className='text-5xl'>{temp.toFixed(1)}°C</p>
                    <p className='text-sm flex flex-row justify-center items-center'><TbTemperaturePlus className='mx-2'/>High: {temp_max}°C | <TbTemperatureMinus className='mx-2'/>Low: {temp_min}°C</p>
                </div>
            </div>
            <div className='flex items-center justify-center py-2 text-xl text-cyan-300 capitalize'>
                <p>{weather[0].description}</p>
            </div>
        </div>
    )
}

export default TempratureAndStatus