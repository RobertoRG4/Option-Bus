import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Styles } from "./Styles";

const Lugares = ({ data }) => {
  const handlePress = (item) => {
    router.push({
      pathname: "Utilites/Places",
      params: {
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
      },
    });
  };
  return (
    <View style={Styles.lugaresContainer}>
      <Text style={Styles.lugaresText}>Lugares:</Text>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={Styles.lugaresButton}
          onPress={() => handlePress(item)}
        >
          <View style={Styles.flexCenter}>
            <MaterialIcons name="place" size={24} color="rgb(45,156,219)" />
            <Text style={Styles.iconText}>{item.title}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Lugares;
