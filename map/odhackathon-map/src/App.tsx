import { useState, useEffect } from 'react'
import './App.css';
import LeafletMap from './components/map'

function App() {
  const [lat, setLat] = useState<number>(35.6905)
  const [lng, setLon] = useState<number>(139.6995)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      const { latitude: latitude, longitude: longitude } = e.coords;
      setLat(latitude)
      setLon(longitude)
    });
  }, []);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <LeafletMap lat={lat} lng={lng} />
  );
}

export default App;
