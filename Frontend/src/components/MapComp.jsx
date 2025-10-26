import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// custom icons
const userIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
});

const centerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
});

// component to move map when user location changes
function LocationMarker({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 13);
    }
  }, [position, map]);
  return position ? (
    <Marker position={position} icon={userIcon}>
      <Popup>You are here 👋</Popup>
    </Marker>
  ) : null;
}

export default function MapComp() {
  const [userPosition, setUserPosition] = useState(null);
  const [centerLocations, setCenterLocations] = useState([]);

  // Example data with addresses only
  const centers = [
    { id: 1, name: "BinWise Cairo Center", address: "Nasr City, Cairo, Egypt" },
    { id: 2, name: "BinWise Giza Center", address: "Dokki, Giza, Egypt" },
    { id: 3, name: "BinWise Alex Center", address: "محمد نجيب, Alexandria, Egypt" },
    { id: 4, name: "BinWise Alex Center", address:"El Galaa Street, Victoria, Alexandria, Egypt"
},
    { id: 5, name: "BinWise Alex Center", address: "Sidi bishr, Alexandria, Egypt" },
    { id: 6, name: "BinWise Alex Center", address: "محطة سيدي بشر, Alexandria, Egypt" },
    { id: 7, name: "BinWise Alex Center", address: "  شارع السياحة الاحمدية فيكتوريا,Alexandria, Egypt" },
    { id: 8, name: "BinWise Alex Center", address: " Azzbet Saad ,Alexandria, Egypt" },
    { id: 9, name: "BinWise Alex Center", address: "Sidi Gaber, Alexandria, Egypt" },
    { id: 10, name: "BinWise Alex Center", address: " ميدان عزبة سعد,  Alexandria, Egypt" },
  ];

  // convert address to coordinates
  async function fetchCoordinates(address) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await res.json();
    if (data && data.length > 0) {
      return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    }
    return null;
  }

  // get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => console.error(err),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // fetch coordinates for all centers
  useEffect(() => {
    async function loadCenters() {
      const results = [];
      for (const center of centers) {
        const coords = await fetchCoordinates(center.address);
        if (coords) {
          results.push({ ...center, coords });
        }
      }
      setCenterLocations(results);
    }
    loadCenters();
  }, []);

  return (
    <div className="w-full h-[500px]">
      <MapContainer
        center={userPosition || [30.0444, 31.2357]} // Cairo as default
        zoom={7}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        {/* User location */}
        <LocationMarker position={userPosition} />

        {/* Center markers */}
        {centerLocations.map((center) => (
          <Marker
            key={center.id}
            position={center.coords}
            icon={centerIcon}
          >
            <Popup>
              <b>{center.name}</b>
              <br />
              {center.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
