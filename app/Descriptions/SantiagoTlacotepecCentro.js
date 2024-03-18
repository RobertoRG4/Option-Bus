import React from "react";
import { View, Text } from "react-native";
import LineaTime from "../Utilites/LineaTime";
import { Info } from "../../Info/SantiagoTlacotepecCentro";
import Lugares from "../Utilites/Lugares";
import { Styles } from "../Utilites/Styles";
const data = [
  {
    key: 1,
    title: "lugar",
    coords: { latitude: 19.29114, longitude: -99.656531 },
  },
  {
    key: 2,
    title: "lugar",
    coords: { latitude: 19.283001, longitude: -99.660879 },
  },
  { key: 3, title: "lugar", coords: { latitude: 12, longitude: 12 } },
  { key: 4, title: "lugar", coords: { latitude: 12, longitude: 12 } },
  { key: 5, title: "lugar", coords: { latitude: 12, longitude: 12 } },
  { key: 6, title: "lugar", coords: { latitude: 12, longitude: 12 } },
];

const SantiagoTlacotepecCentro = () => {
  return (
    <View style={Styles.containerBackground}>
      <Lugares data={data} />
      <View style={Styles.container}>
        <Text style={Styles.textStops}>Paradas / Subidas</Text>
        <LineaTime data={Info.paradasSubidas} />
      </View>
    </View>
  );
};

export default SantiagoTlacotepecCentro;
