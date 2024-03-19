import React from "react";
import { View, Text, Pressable, useColorScheme } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Styles } from "./Styles";

const DarkModeButton = ({ isDarkMode }) => {
  const theme = useColorScheme();
  return (
    <View style={Styles.containerButton}>
      <View style={Styles.flexCenter}>
        <Text style={Styles.fontSizeSettings}>Modo Obscuro</Text>
        <View style={Styles.container} />
        <Pressable
          onPress={() => {
            switchTheme(theme) === "light"
              ? switchTheme("dark")
              : switchTheme("light");
          }}
          style={Styles.darkModeButton}
        >
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
