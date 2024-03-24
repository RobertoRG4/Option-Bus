import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Container = ({ children }) => {
  return <View style={styles.Container}>{children}</View>;
};
export const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Button}>
      {children}
    </TouchableOpacity>
  );
};
export const Title = ({ children }) => {
  return <Text style={styles.Title}>{children}</Text>;
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Title: {
    fontSize: 20,
  },
  Button: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 22,
    margin: 5,
  },
});
