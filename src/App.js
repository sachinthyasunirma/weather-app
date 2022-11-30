import './App.css';
import Searchbar from './Components/Searchbar';
import WeatherPage from './Page/WeatherPage';

function App() {
  return (
    <div className="mx-auto lg:my-auto max-w-screen-md md:mt-4 py-4 px-4 lg:mt-4 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <WeatherPage/>
    </div>
  );
}

export default App;
