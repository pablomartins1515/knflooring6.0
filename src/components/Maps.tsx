import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';

const containerStyle = {
  width: '360px',
  height: '360px'
};

const center = {
  lat: 40.3042106628418,
  lng: -73.99261474609375,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyABbsa5KaJlnCxu6ztOw0TqWKE8xzlhgYg"
  });

  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(loadedMap: google.maps.Map | null) {
    // Define o mapa
    setMap(loadedMap);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const getPixelPositionOffset = (width: number, height: number) => ({
    x: -(width / 2),
    y: -(height / 2),
  });

  const drawCircleInsideMap = () => {
    // Conteúdo JSX da função
    return (
      <div>
        {/* Seu conteúdo aqui */}
      </div>
    );
  };

  useEffect(() => {
    const initMap = async () => {
      // Request needed libraries.
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;

      const mapInstance = new Map(document.getElementById('map') as HTMLElement, {
        center: center,
        zoom: 12,
        // In the cloud console, configure this Map ID with a style that enables the
        // "Locality" feature layer.
        mapId: '2c297ac2affefac1', // <YOUR_MAP_ID_HERE>,
      });

      setMap(mapInstance);
    };

    if (isLoaded) {
      initMap();
    }
  }, [isLoaded]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        {/* Chama a função para renderizar o conteúdo */}
        {drawCircleInsideMap()}
      </OverlayView>
      <div id="map" style={{ width: '360px', height: '360px' }} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Maps);