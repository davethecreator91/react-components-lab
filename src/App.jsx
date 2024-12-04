import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import './App.css'

Forecast = [
  {
    day: "Mon",
    img: <FontAwesomeIcon icon={faSun} />,
    weather: "conditions: sunny"
    time: "time: Morning"
  },
  {
    day: "Tue",
    img: <FontAwesomeIcon icon={faMoon} />,
    weather: "conditions: clear",
    time: "time: Night"
  },
  {
    day: "Wed",
    img: <FontAwesomeIcon icon={faCloudBolt} />,
    weather: "conditions: stormy",
    time: "time: All Day"
  },
  {
    day: "Thu",
    img: <FontAwesomeIcon icon={faCloudSun} />,
    weather: "conditions: overcast",
    time: "time: Evening"
  },
  {
    day: "Fri",
    img: <FontAwesomeIcon icon={faCloudMoon} />,
    weather: "conditions: cloudy",
    time: "time: Night"
  },
];

function App() {

  return (
    <>
 
    </>
  )
}

export default App
