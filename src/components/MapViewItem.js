import React from 'react';
import {Platform} from 'react-native';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';

// local imports
import MapViewStyles from './mapView.styles';

const MapViewComponent = () => {
  const defaultProvider =
    Platform.OS === 'ios' ? PROVIDER_DEFAULT : PROVIDER_GOOGLE;
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={MapViewStyles.mapView}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    />
  );
};

const MapViewStyles = StyleSheet.create({
    mapView: {
      ...StyleSheet.absoluteFillObject,
    },
  });

export default MapViewComponent;