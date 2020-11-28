import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { useLeafletContext } from '@react-leaflet/core';

function GoogleMutant(props) {
  const context = useLeafletContext();
  const googlemutantRef = useRef();

  useEffect(() => {
    const type = props.type || 'roadmap';
    googlemutantRef.current = L.gridLayer.googleMutant({ type: type });
    const { map } = context;
    googlemutantRef.current.addTo(map);
  }, []);

  return null;
}

export default GoogleMutant;
