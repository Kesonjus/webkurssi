import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';
import Weather from './Weather';

function App() {
const [lat, setLat] = useState(0);
const [lon, setLon] = useState(0);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    }, (error) => {
      alert(error);
      })
  }
  else {
    alert("Geolocation is not supported by this browser.");
  }
})
  return (
    <p>
      <h3> Your position is</h3>
      position:  &nbsp;
      {lat.toFixed(3)} &nbsp;
      {lon.toFixed(3)}
      <Weather lat={lat} lon={lon}/>
    </p>
  );
}

export default App;
