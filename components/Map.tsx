import { Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import {ContactInfo} from '../data/Data';
import L from "leaflet";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Map() {
  const latLong :any=[ContactInfo.coordinates.lat,ContactInfo.coordinates.log];
  const address = ()=>(
     <ul>
      <li>{ContactInfo.address}</li>
     </ul>

  )
  return (
    <MapContainer center={latLong} zoom={13} style={{ height: '70%', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={latLong} >
      <Popup>{address()}</Popup>
    </Marker>
  </MapContainer>
  )
}
