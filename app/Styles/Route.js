import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Route = () => {
  return (
    <View style={Styles.Container}>
      <MaterialIcons name="route" size={24} color="#3493db" />
    </View>
  );
};
export default Route;

const Styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
});
