import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './map.css';
import GoogleMutant from './google-mutant';

function MapComponent(props) {
  return (
    <MapContainer
      className="mapcontainer"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      {/* <GoogleMutant type="roadmap" /> */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
