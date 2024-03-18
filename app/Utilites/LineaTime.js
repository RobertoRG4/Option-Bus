import React from "react";
import { View, Text, TouchableOpacity, Alert, Modal } from "react-native";
import Timeline from "react-native-timeline-flatlist";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Styles } from "./Styles";

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
      <View style={Styles.containerHorizontal}>
        <Text style={Styles.lineaTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
        <TouchableOpacity
          style={Styles.buttonTimeLine}
          onPress={() => handlePress(item)}
        >
          <Text style={Styles.textBold}>Ver Parada</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={Styles.container}>
      <Timeline
        data={data}
        innerCircle="icon"
        circleSize={40}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        descriptionStyle={{ color: "gray" }}
        showTime={false}
        options={{
          style: Styles.timeLineWidth,
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
