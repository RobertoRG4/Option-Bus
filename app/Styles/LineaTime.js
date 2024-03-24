import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const ContainerHorizontal = ({ children }) => {
  return <View style={Styles.ContainerHorizontal}>{children}</View>;
};
export const Title = ({ children }) => {
  return <Text style={Styles.Title}>{children}</Text>;
};
export const Description = ({ children }) => {
  return <Text>{children}</Text>;
};
export const TextButton = ({ children }) => {
  return <Text style={Styles.TextButton}>{children}</Text>;
};
export const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.Button}>
      {children}
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  ContainerHorizontal: { paddingHorizontal: 5, flex: 1 },
  Title: { fontWeight: "bold", fontSize: 18 },
  TextButton: {
    fontWeight: "bold",
    color: "white",
  },
  Button: {
    width: 100,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: "rgb(45,156,219)",
    margin: 20,
  },
});
