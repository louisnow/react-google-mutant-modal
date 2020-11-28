import { useState, useEffect } from 'react';
import { MapComponent } from './map';
import { Loader } from '@googlemaps/js-api-loader';
import './App.css';

function App() {
  const [googleLoaded, setGoogleLoaded] = useState(false);

  // useEffect

  return (
    <div>
      <MapComponent className="mappane"></MapComponent>
    </div>
  );
}

export default App;
