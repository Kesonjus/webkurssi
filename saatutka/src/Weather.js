import axios from 'axios';
import { useEffect,useState } from 'react';

const API_URL= 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL= "https://openweathermap.org/img/wn/";
const API_KEY= "";

export default function Weather({lat,lon}) {
  const [location, setLocation ] = useState('');
  const [temp, setTemp] = useState(0);
  const [speed , setSpeed] = useState(0);
  const [direction, setDirection] = useState(0);
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('');

useEffect(() => {

  const url = API_URL + "lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=metric";

  console.log(url);

  axios.get(url).then((response) => {
    console.log(response.data);
    setLocation(response.data.name);
    setTemp(response.data.main.temp);
    setSpeed(response.data.wind.speed);
    setDirection(response.data.wind.deg);
    setDescription(response.data.weather[0].description);
    setIcon(ICON_URL + response.data.weather[0].icon + "@2x.png");

  }).catch((error) => {
    console.log(error);
  });
}, )

return (
  <>
  <h3>Weather on your location</h3>
  <p>Temperature: {temp} &deg;C</p>
  <p>Wind: {speed} m/s {direction} &deg;</p>
  <p>Description: {description}</p>
  <img src={icon} alt={description}/>
  </>
)
}