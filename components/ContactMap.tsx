"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import L from 'leaflet';

export default function ContactMap() {

  const customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-inner">
      <MapContainer
        center={[13.794511, 100.324477]}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        <Marker position={[13.794511, 100.324477]} icon={customIcon}>
          <Popup>
            <div className="text-slate-900 font-sans p-1">
              <strong className="block text-sm">Faculty of ICT, Mahidol University</strong>
              <span className="text-xs text-slate-600">Salaya, Phutthamonthon District, Nakhon Pathom 73170</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}