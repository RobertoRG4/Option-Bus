import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Map from "../Componets/Map";
import { Styles } from "./Styles";
const Places = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <View style={Styles.container}>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/marcador-de-posicion.png")}
        stylesMarker={Styles.marker}
        coordsDelta={{ latitudeDelta: 0.004, longitudeDelta: 0.004 }}
      />
    </View>
  );
};
export default Places;
