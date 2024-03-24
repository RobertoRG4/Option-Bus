import React from "react";
import { View, Text } from "react-native";
import LineaTime from "../Utilites/LineaTime";
import { Data } from "../../Info/SantiagoTlacotepecCentro";
import Lugares from "../Utilites/Lugares";
import { Styles } from "../Utilites/Styles";

const SantiagoTlacotepecCentro = () => {
  return (
    <View style={Styles.containerBackground}>
      <Lugares data={Data.Lugares} />
      <View style={Styles.container}>
        <Text style={Styles.textStops}>Paradas / Subidas</Text>
        <LineaTime data={Data.paradasSubidas} />
      </View>
    </View>
  );
};

export default SantiagoTlacotepecCentro;
