import { Marker, Popup } from "react-leaflet";
import { FC } from 'react'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Data from '../data/baby.json';
import babyImage from '../image/baby.png';

const BabyMaker: FC = () => {

  const customMarker = () => {
    // const icon = require(babyImage);
    return L.icon({
      iconUrl: babyImage,
      iconSize: [35, 35],
      className: "marker",
    });
  };
  return (
    <>
      {Data.map((item) => (
        <Marker position={[Number(item.latitude), Number(item.longitude)]} icon={customMarker()}>
          <Popup>
            現在の位置です
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default BabyMaker;