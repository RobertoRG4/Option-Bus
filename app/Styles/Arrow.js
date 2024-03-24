import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Arrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.Button}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  Button: { paddingHorizontal: 15 },
});
