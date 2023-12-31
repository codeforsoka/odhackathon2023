import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FC, useEffect } from 'react'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import GPS from './gps'
import BabyMaker from './babyMaker'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import babyImage from '../image/baby.png';

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
  const notify = () => {
    // @ts-ignore
    Push.create("SOSend", {
      body: "何か困りごとがありますか？お探しの施設の方に助けを求めることができます。",
      icon: babyImage,
      tag: "myTag",
      timeout: 12000,
      vibrate: [100, 100, 100],
      onClick: function (e: any) {
          console.log("onClick", e);
          window.open("https://codeforsoka.github.io/odhackathon2023/facility/send_message.html", '_blank');
      },
      onShow: function (e: any) {
          console.log("onShow", e);
      },
      onClose: function (e: any) {
          console.log("onClose", e);
      },
      onError: function (e: any) {
          console.log("onError", e);
      }
    });
  }
  useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.src = 'https://cdnjs.cloudflare.com/ajax/libs/push.js/1.0.12/push.min.js';
    head.appendChild(scriptUrl);
  }, []);
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
        【デモ用機能】クリックするとプッシュ通知が送られます(本来は施設に近づくと通知が自動で送られます)<br></br>
          <input type="button" id="push" onClick={() => notify()} value="プッシュ通知を送る" />
        </Popup>
      </Marker>
      <BabyMaker />
      <GPS />
    </MapContainer>
  );
};

export default Map;