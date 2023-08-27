import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FC } from 'react'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import GPS from './gps'
import BabyMaker from './babyMaker'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

type Props = {
  lat: number
  lng: number
}

const Map: FC<Props> = (props) => {
  const { lat, lng } = props

  const colorMarker = (color: string) => {
    return L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      className: `default-marker ${color}`,
    });
  };
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={colorMarker("red")}>
        <Popup>
          現在の位置です
        </Popup>
      </Marker>
      <BabyMaker />
      <GPS />
    </MapContainer>
  );
};

export default Map;