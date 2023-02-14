import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '75vh',
  border: "1px solid green",
  position:"relative",
  marginTop:"5rem",
  borderRadius: "20px",
};

const center = {
  address: "Rokosza 5, Busko-Zdrój, Poland",
  lat: 50.45730849310429,
  lng: 20.712473549454433
};


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAcR0PMILbGgQ6DgF4bn_dL8zEFFFyJj74"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
       >
       
        <></>
      </GoogleMap>
  ) : <></>
}

export default Map
