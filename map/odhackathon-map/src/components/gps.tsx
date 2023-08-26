import { FC, useEffect } from 'react';
import { useMap } from 'react-leaflet';

const GPS: FC = () => {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e) => {
      const { latitude: latitude, longitude: longitude } = e.coords;
      map.flyTo([latitude, longitude], map.getZoom());
    });
  }, []);

  // useEffect(() => {
  //   console.log(lat)
  //   console.log(lng)
  //   map.flyTo([lat, lng], map.getZoom());
  // }, []);

  return (
    <></>
  );
};

export default GPS;
