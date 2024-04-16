import { View, Text, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";

export default MarkerPoint = ({ cordinates, Title }) => {
  return (
    <Marker coordinate={cordinates}>
      <View style={Styles.MarkerStyle}>
        <Text style={Styles.MarkerText}>{Title}</Text>
      </View>
    </Marker>
  );
};

const Styles = StyleSheet.create({
  MarkerStyle: {
    backgroundColor: "#3493db",
    padding: 5,
    borderRadius: 5,
  },
  MarkerText: {
    color: "#fff",
  },
});
