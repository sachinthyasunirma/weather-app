import React from 'react'
import {formatToLocalDate,formatToTime} from '../Services/DateFormat'

function Location({weatherData:{country,dt,timezone,name}}) {
  return (
    <div>
        <div className='flex flex-col items-center justify-center mt-6'>
            <p className='text-white text-xl font-extralight'>
                {formatToLocalDate(dt,timezone)}
            </p>
            <p className='text-white text-3xl my-4 font-extralight'>
                {formatToTime(dt,timezone)}
            </p>
        </div>
        <div className='flex items-center justify-center my-1'>
            <p className='text-white text-3xl font-medium'>
                {name}, {country}
            </p>
        </div>
    </div>
  )
}

export default Location