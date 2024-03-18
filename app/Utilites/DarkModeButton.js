import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Styles } from "./Styles";

const DarkModeButton = ({ onPress, isDarkMode }) => {
  return (
    <View style={Styles.containerButton}>
      <View style={Styles.flexCenter}>
        <Text style={Styles.fontSizeSettings}>Modo Obscuro</Text>
        <View style={Styles.container} />
        <Pressable onPress={onPress} style={Styles.darkModeButton}>
          {isDarkMode ? (
            <Feather name="moon" size={24} color={Styles.iconColor} />
          ) : (
            <Feather name="sun" size={24} color={Styles.iconColor} />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default DarkModeButton;
