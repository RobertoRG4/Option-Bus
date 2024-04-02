import { StyleSheet, ScrollView } from "react-native";

export const Container = ({ children }) => {
  return <ScrollView style={styles.Container}>{children}</ScrollView>;
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
  },
});
