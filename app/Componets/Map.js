import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { StyleSheet, View, Image } from "react-native";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import { Styles } from "../Utilites/Styles";

const Map = ({ coords, icon, stylesMarker, coordsDelta }) => {
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

  const [markerVisible, setMarkerVisible] = useState(!!coords);

  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        liteMode={true}
      >
        {markerVisible && (
          <Marker
            coordinate={{
              latitude: coords.parsedLatitude,
              longitude: coords.parsedLongitude,
            }}
          >
            <Image source={icon} style={stylesMarker} />
          </Marker>
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
      </MapView>
    </View>
  );
};

export default Map;
