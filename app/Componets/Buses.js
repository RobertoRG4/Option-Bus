import React, { Suspense, lazy } from "react";
import { View, TouchableOpacity, Text, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";

const AutobusDescriptions = lazy(() =>
  import("../Utilites/AutobusDescriptions")
);

const Buses = () => {
  return (
    <View style={Styles.container}>
      <Suspense fallback={<Text>Cargando...</Text>}>
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
      </Suspense>
    </View>
  );
};

export default Buses;
