import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const MapContainer = ({ children }) => {
  return <View style={Styles.MapContainer}>{children}</View>;
};

export const MyLocationButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        top: "90%",
        right: "4%",
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name="crosshairs-gps" size={34} color="#3493db" />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  MapContainer: { flex: 1 },
});
