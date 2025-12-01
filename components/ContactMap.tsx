import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function ContactMap() {

  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl: icon.src,
      iconRetinaUrl: icon.src,
      shadowUrl: iconShadow.src,
    });
  }, []);

  return (
    <MapContainer
      center={[13.794511, 100.324477]}
      zoom={20}
      style={{ height: '300px', width: '70%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[13.794511, 100.324477]}>
        <Popup>Faculty of Information and Communication Technology, Mahidol University</Popup>
      </Marker>
    </MapContainer>
  );
}