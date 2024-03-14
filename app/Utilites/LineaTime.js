import React from "react";
import { View, Text, TouchableOpacity, Alert, Modal } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const LineaTime = ({ data }) => {
  const handlePress = (item) => {
    router.push({
      pathname: "/Utilites/SubidaBajadaView",
      params: {
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
        title: item.title,
      },
    });
  };

  const Render = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 5, flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity
          style={{
            width: 120,
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 12,
            borderRadius: 4,
            backgroundColor: "rgb(45,156,219)",
            margin: 20,
          }}
          onPress={() => handlePress(item)}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
            }}
          >
            Ver Parada
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Timeline
        data={data}
        innerCircle="icon"
        circleSize={40}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        descriptionStyle={{ color: "gray" }}
        showTime={false}
        options={{
          style: { width: 355, alignSelf: "center" },
        }}
        renderDetail={(item) => <Render item={item} />}
        iconDefault={
          <MaterialCommunityIcons
            name="bus-stop-covered"
            size={20}
            color="white"
          />
        }
      />
    </View>
  );
};

export default LineaTime;
