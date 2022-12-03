import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/WeatherCard";
import DayWeather from "./Components/DayWeather";
const data = [
  {
    status: "Sunny",
    day: "Friday",
    degree: "32",
    mood: "Clear Sky",
  },
  {
    status: "wind",
    day: "Sunday",
    degree: "10",
    mood: "Clouds",
  },
  {
    status: "Sunny",
    day: "Friday",
    degree: "32",
    mood: "Clear Sky",
  },
  {
    status: "wind",
    day: "Sunday",
    degree: "10",
    mood: "Clouds",
  },
];
function App() {
  return (
    <>
    <Card/>
    {
      data.map((item,idx)=>(
        <DayWeather key={idx} {...item} />
      ))
    }
    </>
  );
}

export default App;
