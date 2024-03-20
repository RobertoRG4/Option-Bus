import { View, StyleSheet } from "react-native";

const Container = ({ children }) => {
  return <View style={Styles.Container}>{children}</View>;
};

const Styles = StyleSheet.create({ Container: { flex: 1 } });

export default Container;
