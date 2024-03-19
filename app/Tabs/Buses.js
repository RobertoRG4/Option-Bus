import React from "react";
import { View, Pressable } from "react-native";
import AutobusDescriptions from "../Utilites/AutobusDescriptions";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";

const Buses = () => {
  return (
    <View style={Styles.containerBackground}>
      {Object.values(Bus).map(
        ({ key, titulo, tiempo, costo, img, color, directions }) => (
          <Pressable key={key} onPress={() => router.push(directions)}>
            <AutobusDescriptions
              titulo={titulo}
              tiempo={tiempo}
              costo={costo}
              img={img}
              color={color}
            />
          </Pressable>
        )
      )}
    </View>
  );
};

export default Buses;
