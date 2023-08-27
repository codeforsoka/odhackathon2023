import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import React, { FC, useState, useEffect, useCallback } from 'react'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import GPS from './gps'
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import Data from '../data/baby.json';
import babyImage from '../image/baby.png';

const BabyMaker: FC = () => {

  const colorMarker = (color: string) => {
    return L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
      className: `default-marker ${color}`,
    });
  };
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