import React from 'react'
import LoginBtn from './LoginBtn'

function SignIn() {
  return (
    <>
        <div className='lg:py-40 md:py-40 py-24  flex flex-row justify-center items-center text-center'>
            <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Weather App</h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <img src='https://download.spinetix.com/content/widgets/icons/weather/02d.png' />
              </div>
              <LoginBtn />
            </div>
          </div>
    </>
  )
}

export default SignIn