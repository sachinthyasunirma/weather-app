import React from 'react'
import { MdOutlineWaterDrop } from 'react-icons/md'
import { FiWind } from 'react-icons/fi';
import { BsSun, BsSunrise } from 'react-icons/bs';
import {RiTempHotLine} from 'react-icons/ri'
import { formatToTime } from '../Services/DateFormat';

function TempratureDetails({weatherData:{feels_like,humidity,speed,sunrise,timezone,sunset}}) {
    return (
        <div className='lg:mx-32 md:mx-32 sm:mx-24'>
            <div className='flex flex-row items-center justify-center text-white py-3'>
                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <RiTempHotLine size={18} className="mr-1"/>
                        Feel likes:
                        <span className='font-medium ml-1'>{feels_like}</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <MdOutlineWaterDrop size={18} className="mr-1" />
                        Humidity:
                        <span className='font-medium ml-1'>{humidity}%</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <FiWind size={18} className="mr-1" />
                        Wind:
                        <span className='font-medium ml-1'>{speed}Km/h</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-center py-3 space-x-2 text-white text-sm items-center'>
                <BsSun />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>{formatToTime(sunrise,timezone)}</span>
                </p>
                <p className='font-light'>|</p>

                <BsSunrise />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>{formatToTime(sunset,timezone)}</span>
                </p>
            </div>
        </div>
    )
}

export default TempratureDetails