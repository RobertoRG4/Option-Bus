import { StyleSheet, FlatList } from "react-native";

export const Container = ({ data, renderItem, keyExtractor }) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.Container}
    />
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fff",
  },
});
