import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function BeachMap({ beaches }) {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {beaches.map(beach => (
        <Marker key={beach.id} position={[beach.latitude, beach.longitude]}>
          <Popup>
            {beach.name}<br />Suitability: {beach.suitability}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default BeachMap;
