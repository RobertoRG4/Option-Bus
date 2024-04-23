import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Arrow = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};
