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
        mapType="terrain"
        initialRegion={{
          latitude: 12.03378178067668,  
          longitude: 39.044016190010545,
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
            latitude: 12.0321900, 
            longitude: 39.0475600, 
          }}
          title={"Lalibela"}
        />
        {userLocation && (
          <MapViewDirections
            mode={"DRIVING"}
            origin={userLocation}
            destination={{
              latitude: 12.0321900, 
              longitude: 39.0475600,
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
      <ScrollView>
        <Text style={{ fontSize: 18 }}>
          Duration:{" "}
          {directionResult != null ? directionResult.duration : "loading..."} hours
        </Text>
        <Text style={{ fontSize: 18 }}>
          Distance:{" "}
          {directionResult != null ? directionResult.distance : "loading..."} KM
        </Text>
      </ScrollView>
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