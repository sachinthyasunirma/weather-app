import './App.css';
import WeatherPage from './Page/WeatherPage';
import { useAuth0 } from '@auth0/auth0-react'
import LoginBtn from './Components/LoginBtn';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? (
        <div className="mx-auto lg:my-auto max-w-screen-md md:mt-4 lg:rounded-md md:rounded-md py-4 px-4 lg:mt-4 bg-gradient-to-br from-sky-600 to-blue-700 lg:h-fit md:h-fit h-full shadow-xl shadow-gray-400">
          <WeatherPage />
        </div>
      ) : (
        <>
          <div className='py-40 flex flex-row justify-center items-center text-center'>
            <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8">
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Weather App</h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <img src='https://download.spinetix.com/content/widgets/icons/weather/02d.png' />
              </div>
              <LoginBtn />
            </div>
          </div>
        </>)}
    </>

  );
}

export default App;




