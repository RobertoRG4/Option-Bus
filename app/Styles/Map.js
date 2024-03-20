import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";

const MapContainer = ({ children }) => {
  return <View style={Styles.MapContainer}>{children}</View>;
};

const Styles = StyleSheet.create({
  MapContainer: { flex: 1, marginTop: Constants.statusBarHeight },
});

export default MapContainer;
