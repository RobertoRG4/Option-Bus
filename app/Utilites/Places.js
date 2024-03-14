import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
const Places = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);
  return (
    <View>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
    </View>
  );
};
export default Places;
