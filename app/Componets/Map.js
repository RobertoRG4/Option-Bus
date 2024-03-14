import React from "react";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { StyleSheet, View, useColorScheme } from "react-native";
import { DarkMap, INITIAL_REGION, StandarMap } from "../PropsMap/Props";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import { Styles } from "../Utilites/Styles";

const Map = () => {
  return (
    <View style={Styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        showsUserLocation={true}
        customMapStyle={StandarMap}
        liteMode={true}
      >
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
          onPress={() => {
            router.push("Descriptions/SanJuanTilapaTerminal");
          }}
        />
      </MapView>
    </View>
  );
};
export default Map;
