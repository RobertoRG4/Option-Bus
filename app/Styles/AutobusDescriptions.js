import { View, StyleSheet, Image, Text } from "react-native";

export const Container = ({ children, key, theme }) => {
  return (
    <View style={styles.Container} key={key}>
      <View style={styles.Content}>{children}</View>
    </View>
  );
};
export const ContentImage = ({ source }) => {
  return (
    <View style={styles.ContainerImage}>
      <Image style={styles.Image} source={source} />
    </View>
  );
};

export const Description = ({ title, price, time, color, theme }) => {
  return (
    <View style={styles.ContainerInformation}>
      <Text style={styles.Title}>{title}</Text>
      <View style={styles.Description}>
        <Text style={styles.Text}>Tiempo: {time} </Text>
        <Text style={styles.Text}>Costo: {price}</Text>
      </View>
      <View
        style={{
          marginTop: 5,
          height: 5,
          width: "95%",
          backgroundColor: color,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "90%",
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  Content: {
    flexDirection: "row",
    alignItems: "center",
  },
  ContainerImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ContainerInformation: {
    flex: 1,
    paddingVertical: 10,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  Description: {
    flexDirection: "row",
    alignContent: "flex-end",
  },
  Text: {
    paddingHorizontal: 5,
  },
});
