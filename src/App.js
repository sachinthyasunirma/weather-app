import './App.css';
import WeatherPage from './Page/WeatherPage';
import { useAuth0 } from '@auth0/auth0-react'
import LoginBtn from './Components/LoginBtn';
import SignIn from './Components/SignIn';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      {!isAuthenticated ? (
        <div className="mx-auto lg:my-auto max-w-screen-md md:mt-4 lg:rounded-md md:rounded-md py-4 px-4 lg:mt-4 bg-gradient-to-br from-sky-600 to-blue-700 lg:h-fit md:h-fit h-full shadow-xl shadow-gray-400">
          <WeatherPage />
        </div>
      ) : (
        <></>
        // <>
        //   <SignIn/>
        // </>
        )}
    </>

  );
}

export default App;




