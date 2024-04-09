import { View, Text, StyleSheet, Pressable } from "react-native";

export const Container = ({ children }) => {
  return <View style={styles.Container}>{children}</View>;
};
export const Title = ({ children }) => {
  return <Text style={styles.Title}>{children}</Text>;
};
export const Content = ({ children }) => {
  return <View style={styles.Content}>{children}</View>;
};
export const IconText = ({ children }) => {
  return <Text style={styles.IconText}>{children}</Text>;
};
export const Button = ({ onPress, index, children }) => {
  return (
    <Pressable onPress={onPress} key={index} style={styles.Button}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Title: {
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    backgroundColor: "rgb(45,156,219)",
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    width: "100%",
  },
  Content: { flexDirection: "row", alignItems: "center" },
  IconText: { fontSize: 20, marginLeft: 5, maxWidth: "80%" },
  Button: { width: "48%", marginVertical: 15, margin: 2 },
});
