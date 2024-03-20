import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Styles } from "../Styles";

const SwitchMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <View style={Styles.containerButton}>
      <View style={Styles.flexCenter}>
        <Text style={Styles.fontSizeSettings}>Modo Obscuro</Text>
        <View style={Styles.container} />
        <Pressable onPress={() => {}} style={Styles.darkModeButton}>
          {darkMode ? (
            <Feather name="moon" size={24} color={Styles.iconColor} />
          ) : (
            <Feather name="sun" size={24} color={Styles.iconColor} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default SwitchMode;
