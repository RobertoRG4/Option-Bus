import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View } from "react-native";
import Map from "../Componets/Map";
const Places = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <View style={{ flex: 1 }}>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/marcador-de-posicion.png")}
        stylesMarker={{ width: 50, height: 50 }}
        coordsDelta={{ latitudeDelta: 0.004, longitudeDelta: 0.004 }}
      />
    </View>
  );
};
export default Places;
