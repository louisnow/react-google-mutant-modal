import L from 'leaflet';
import 'leaflet.gridlayer.googlemutant';
import { withLeaflet, MapLayer } from 'react-leaflet';

/**
 * Source code of MapLayer
 * https://github.com/PaulLeCam/react-leaflet/blob/v2/src/MapLayer.js
 *
 * this.layerContainer.removeLayer(this.leafletElement) errors out
 */

const GoogleMutant = withLeaflet(
  class extends MapLayer {
    createLeafletElement(props) {
      const type = props.type || 'roadmap';
      return new L.gridLayer.googleMutant({
        type,
      });
    }
  },
);

export default GoogleMutant;
