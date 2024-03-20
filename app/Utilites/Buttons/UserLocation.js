import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../Styles";

const UserLocation = ({ result }) => {
  const [state, setState] = useState(result);

  return (
    <View style={Styles.containerButton}>
      <View style={Styles.flexCenter}>
        <Text style={Styles.fontSizeSettings}>Localizacion</Text>
        <View style={Styles.container} />
        <Pressable onPress={() => {}} style={Styles.darkModeButton}>
          {state ? (
            <MaterialIcons name="location-on" size={24} color="black" />
          ) : (
            <MaterialIcons name="location-off" size={24} color="black" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default UserLocation;
