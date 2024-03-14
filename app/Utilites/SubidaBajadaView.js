import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from "react-native-maps";
//import { MaterialCommunityIcons } from "@expo/vector-icons";

const SubidaBajadaView = () => {
  const { latitude, longitude, title } = useLocalSearchParams();
  const newTitle = title;
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        liteMode={true}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: parsedLatitude,
          longitude: parsedLongitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
          title={newTitle}
          coordinate={{
            latitude: parsedLatitude,
            longitude: parsedLongitude,
          }}
        >
          <Image
            source={require("../../assets/estacion-de-autobuses.png")}
            style={{ width: 30, height: 30 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};
export default SubidaBajadaView;
