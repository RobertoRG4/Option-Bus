import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

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
    <View
      style={{
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          padding: 5,
          backgroundColor: "rgb(45,156,219)",
          color: "#fff",
          padding: 10,
          fontWeight: "bold",
          width: "100%",
        }}
      >
        Lugares:
      </Text>
      {data.map((item, index) => (
        <Pressable
          key={index}
          style={{ width: "48%", marginVertical: 15, margin: 2 }}
          onPress={() => handlePress(item)}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="place" size={24} color="rgb(45,156,219)" />
            <Text style={{ fontSize: 20, marginLeft: 5 }}>{item.title}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default Lugares;
