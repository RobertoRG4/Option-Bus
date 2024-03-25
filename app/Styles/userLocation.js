import { View, Text, StyleSheet, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = ({ children }) => {
  return <View style={styles.Container}>{children}</View>;
};
export const Content = ({ children }) => {
  return <View style={styles.Content}>{children}</View>;
};
export const Title = ({ children }) => {
  return <Text style={styles.Title}>{children}</Text>;
};
export const Space = () => {
  return <View style={styles.Space} />;
};
export const Button = ({ onPress, status }) => {
  return (
    <Pressable onPress={onPress} style={styles.Button}>
      {status ? (
        <MaterialIcons name="location-off" size={24} color="black" />
      ) : (
        <MaterialIcons name="location-on" size={24} color="black" />
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  Content: { flexDirection: "row", alignItems: "center" },
  Title: { fontSize: 20 },
  Button: {
    backgroundColor: "#ccc",
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Space: { flex: 1 },
});
