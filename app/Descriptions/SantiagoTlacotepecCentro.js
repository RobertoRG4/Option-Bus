import React from "react";
import { View, Text } from "react-native";
import LineaTime from "../Utilites/LineaTime";
import { Info } from "../../Info/SantiagoTlacotepecCentro";
import Lugares from "../Utilites/Lugares";

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
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Lugares data={data} />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            padding: 5,
            backgroundColor: "rgb(45,156,219)",
            color: "#fff",
            padding: 10,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Paradas / Subidas
        </Text>
        <LineaTime data={Info.paradasSubidas} />
      </View>
    </View>
  );
};

export default SantiagoTlacotepecCentro;
