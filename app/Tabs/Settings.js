import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import UserLocation from "../Utilites/Buttons/UserLocation";

const Settings = () => {
  return (
    <View style={Styles.containerMargin}>
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
