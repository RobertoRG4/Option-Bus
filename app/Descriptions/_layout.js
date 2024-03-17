import React from "react";
import { Link, Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Styles } from "../Utilites/Styles";

const options = {
  SantiagoTlacotepec: {
    title: "Santiago Tlacotepec - Centro",
    headerLeft: () => (
      <TouchableOpacity
        style={{ paddingHorizontal: 8 }}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
  SanJuanTilapaTerminal: {
    title: "San Juan Tilapa - Terminal",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
};

const descriptionsLayout = () => {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="SantiagoTlacotepecCentro"
        options={options.SantiagoTlacotepec}
      />
      <Stack.Screen
        name="SanJuanTilapaTerminal"
        options={options.SanJuanTilapaTerminal}
      />
    </Stack>
  );
};

export default descriptionsLayout;
