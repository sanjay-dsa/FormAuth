import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const WeatherMap = ({
  city = "Chennai",
  lat = 13.0827,
  lon = 80.2707,
}) => {
  return (
    <div className="weather-map-container">
      <h2 className="map-title">Location Map</h2>

      <MapContainer
        center={[lat, lon]}
        zoom={10}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[lat, lon]}>
          <Popup>
            <strong>{city}</strong>
            <br />
            Latitude: {lat}
            <br />
            Longitude: {lon}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
