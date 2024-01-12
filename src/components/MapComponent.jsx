import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent  = () => {
  useEffect(() => {
    const map = L.map('map').setView([21.0285, 105.8542], 16); // Tọa độ trung tâm của Trường Cao đẳng FPT và mức zoom

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Thêm đánh dấu vị trí của Trường Cao đẳng FPT
    L.marker([21.0285, 105.8542]).addTo(map)
      .bindPopup('Trường Cao đẳng FPT'); // Thêm popup hiển thị tên địa điểm
  }, []);

  return (
    <div id="map" style={{ height: '250px' }}></div>
  );
};

export default MapComponent;

