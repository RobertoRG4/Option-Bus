import React, { Suspense } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";

const Settings = () => {
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => router.push("Utilites/SobreNosotros")}
        style={Styles.settingButton}
      >
        <Text style={Styles.settingText}>Sobre Nosotros</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
