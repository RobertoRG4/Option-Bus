import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";
import Map from "../Tabs/Map";

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
