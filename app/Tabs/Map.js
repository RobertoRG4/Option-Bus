import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import MarkerCustom from "../styles/MarkerCustom";
import MapContainer from "../styles/Map";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const Map = ({ coords, icon, coordsDelta }) => {
  const INITIAL_REGION = coords
    ? {
        latitude: coords.parsedLatitude,
        longitude: coords.parsedLongitude,
        latitudeDelta: coordsDelta.latitudeDelta,
        longitudeDelta: coordsDelta.longitudeDelta,
      }
    : {
        latitude: 19.2839943,
        longitude: -99.6548142,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
  const [currentLocation, setCurrentLocation] = useState(null);
  const [markerVisible, setMarkerVisible] = useState(!!coords);

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status != "granted") {
        return;
      }
      let location = await getCurrentPositionAsync({});
      setCurrentLocation(location.coords);
    };
    getLocation();
  }, []);
  return (
    <MapContainer>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        liteMode={true}
        showsUserLocation={true}
      >
        {markerVisible && (
          <MarkerCustom
            latitude={coords.parsedLatitude}
            longitude={coords.parsedLongitude}
            source={icon}
          />
        )}

        <Polyline
          coordinates={Bus.SantiagoTlacotepecCentro.marks}
          strokeColor="red"
          strokeWidth={3}
          tappable={true}
          onPress={() => router.push("Descriptions/SantiagoTlacotepecCentro")}
        />
        <Polyline
          coordinates={Bus.SanJuanTilapaTerminal.marks}
          strokeColor="#008000"
          strokeWidth={3}
          tappable={true}
          onPress={() => router.push("Descriptions/SanJuanTilapaTerminal")}
        />
        <Polyline
          coordinates={Bus.SanLuisCentro.marks}
          strokeColor="#AA00FF"
          strokeWidth={3}
          tappable={true}
          onPress={() => router.push("Descriptions/SanLuisCentro")}
        />
      </MapView>
    </MapContainer>
  );
};

export default Map;
