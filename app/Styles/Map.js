import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const MapContainer = ({ children }) => {
  return <View style={Styles.MapContainer}>{children}</View>;
};

export const MyLocationButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={Styles.Button} onPress={onPress}>
      <MaterialCommunityIcons name="crosshairs-gps" size={25} color="#3493db" />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  Button: {
    position: "absolute",
    top: "90%",
    right: "4%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  MapContainer: { flex: 1 },
});
