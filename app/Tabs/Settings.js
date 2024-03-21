import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "../Utilites/Styles";
import { router } from "expo-router";
import UserLocation from "../Utilites/Buttons/UserLocation";
import { Provider } from "react-redux";
import { store } from "../state/store";

const Settings = () => {
  return (
    <Provider store={store}>
      <View style={Styles.containerMargin}>
        <UserLocation />
        <TouchableOpacity
          onPress={() => router.push("Utilites/SobreNosotros")}
          style={Styles.borderSettings}
        >
          <Text style={Styles.settingText}>Sobre Nosotros</Text>
        </TouchableOpacity>
      </View>
    </Provider>
  );
};

export default Settings;
