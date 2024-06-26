import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions,ScrollView,Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
export default function MapScreen() {
  const [userLocation, setUserLocation] = useState(null);
  const [directionResult, setDirectionResult] = useState(null);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    (async () => {
      let permission = await Location.getForegroundStateAsync();
      setPermission(permission);
      if (permission === 'granted') {
        const location = await Location.getCurrentPositionAsync();
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    })();
  }, []);

  useEffect(() => {
    if (permission === 'granted') {
      (async () => {
        const location = await Location.getCurrentPositionAsync();
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })();
    }
  }, [permission]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="satellite"
        initialRegion={{
          latitude: 12.03408,  
          longitude: 39.04487,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title={"Your Location"}
          />
        )}
        <Marker
          coordinate={{
            latitude: 12.03408, 
            longitude: 39.04487, 
          }}
          title={"Lalibela"}
        />
        {userLocation && (
          <MapViewDirections
            mode={"DRIVING"}
            origin={userLocation}
            destination={{
              latitude: 12.03408, 
              longitude: 39.04487,
            }}
            apikey={"aK8Pz3gxPWDdBAI5giCy3IdFVcBEpeaTJnvlueHLz2L2HHNPEYPmku1STE0r"}
            strokeWidth={3}
            strokeColor={"red"}
            onReady={(result) => {
              setDirectionResult(result);
            }}
          />
        )}
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 90,
  },
});