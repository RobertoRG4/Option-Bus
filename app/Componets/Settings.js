import React from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import DarkModeButton from "../Utilites/DarkModeButton";

const Settings = () => {
  return (
    <View style={Styles.containerMargin}>
      <DarkModeButton
        isDarkMode={false}
        onPress={() => Alert.alert("alerta")}
      />
      <TouchableOpacity
        onPress={() => router.push("Utilites/SobreNosotros")}
        style={Styles.borderSettings}
      >
        <Text style={Styles.settingText}>Sobre Nosotros</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
