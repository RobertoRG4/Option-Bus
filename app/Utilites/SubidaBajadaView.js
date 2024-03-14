import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import Map from "../Componets/Map";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

const SubidaBajadaView = () => {
  const { latitude, longitude } = useLocalSearchParams();

  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <View style={{ flex: 1 }}>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/estacion-de-autobuses.png")}
        stylesMarker={{ width: 35, height: 35 }}
        coordsDelta={{ latitudeDelta: 0.001, longitudeDelta: 0.001 }}
      />
    </View>
  );
};
export default SubidaBajadaView;
