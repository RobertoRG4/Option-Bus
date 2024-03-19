import React from "react";
import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Styles } from "../Utilites/Styles";

const options = {
  headerCenter: { headerTitleAlign: "center" },
  SantiagoTlacotepec: {
    title: "Santiago Tlacotepec - Centro",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color={Styles.iconColor} />
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
        <Ionicons name="arrow-back" size={24} color={Styles.iconColor} />
      </TouchableOpacity>
    ),
  },
  SanLuisCentro: {
    title: "San Luis - Centro",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color={Styles.iconColor} />
      </TouchableOpacity>
    ),
  },
};

const descriptionsLayout = () => {
  return (
    <Stack screenOptions={options.headerCenter}>
      <Stack.Screen
        name="SantiagoTlacotepecCentro"
        options={options.SantiagoTlacotepec}
      />
      <Stack.Screen
        name="SanJuanTilapaTerminal"
        options={options.SanJuanTilapaTerminal}
      />
      <Stack.Screen name="SanLuisCentro" options={options.SanLuisCentro} />
    </Stack>
  );
};

export default descriptionsLayout;
