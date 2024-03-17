import React from "react";
import { View, Text, Image } from "react-native";
import { Styles } from "./Styles";

const AutobusDescriptions = ({ id, titulo, tiempo, costo, img, color }) => {
  return (
    <View style={Styles.carta} key={id}>
      <View style={Styles.contenido}>
        <View style={Styles.imagen}>
          <Image source={img} style={Styles.imagenCarta} />
        </View>
        <View style={Styles.informacion}>
          <Text style={Styles.titulo}>{titulo}</Text>
          <View style={Styles.caracteristicas}>
            <Text style={{ paddingHorizontal: 3 }}>Tiempo: {tiempo}</Text>
            <Text style={{ paddingHorizontal: 3 }}>Costo: {costo}</Text>
          </View>
          <View style={[Styles.lineRouter, { backgroundColor: color }]} />
        </View>
      </View>
    </View>
  );
};

export default AutobusDescriptions;
