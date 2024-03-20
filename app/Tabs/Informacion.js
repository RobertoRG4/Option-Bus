import React from "react";
import { View, Text, TouchableOpacity, useColorScheme } from "react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import SwitchMode from "../Utilites/Buttons/SwitchMode";
import UserLocation from "../Utilites/Buttons/UserLocation";

const Settings = () => {
  return (
    <View style={Styles.containerMargin}>
      <SwitchMode />
      <UserLocation />
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
