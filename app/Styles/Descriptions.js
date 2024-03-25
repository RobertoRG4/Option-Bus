import { View, Text, StyleSheet } from "react-native";

export const Container = ({ children }) => {
  return <View style={styles.Container}>{children}</View>;
};
export const Content = ({ children }) => {
  return <View style={styles.Content}>{children}</View>;
};
export const Title = () => {
  return <Text style={styles.Title}>Paradas / Subidas</Text>;
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Content: { flex: 1 },
  Title: {
    fontSize: 25,
    textAlign: "center",
    padding: 5,
    backgroundColor: "rgb(45,156,219)",
    color: "#fff",
    padding: 10,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
