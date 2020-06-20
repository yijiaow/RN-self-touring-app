import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoieWlqaWFvdyIsImEiOiJja2JseHcwd3kxZGo0MnVteWx0aHV4cTBrIn0.TsALxfy4HsIuHr-1Wf8Kmg'
);

const Map = () => {
  const [coords, setCoords] = useState([-73.99155, 40.73581]);

  return (
    <SafeAreaView style={styles.page}>
      <Text>Map View</Text>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={2} centerCoordinate={coords} />
        <MapboxGL.PointAnnotation coordinate={coords} />
      </MapboxGL.MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'hotpink',
  },
  map: {
    flex: 1,
  },
});

export default Map;
