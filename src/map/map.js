import React from 'react';
import { Map as MapContainer, TileLayer } from 'react-leaflet';
import { Loader } from '@googlemaps/js-api-loader';

import GoogleMutant from './google-mutant';

class MapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleLoaded: false,
    };
  }

  componentDidMount() {
    const loader = new Loader({ apiKey: process.env.REACT_APP_GMAPS_KEY });
    loader.load().then(() => this.setState({ googleLoaded: true }));
  }

  render() {
    return (
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        {!this.state.googleLoaded ? (
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        ) : (
          <GoogleMutant type="roadmap" />
        )}
      </MapContainer>
    );
  }
}

export default MapComponent;
