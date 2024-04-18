import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const AboutUSContainer = ({ children, theme }) => {
  return <View style={styles.container}>{children}</View>;
};
export const Title = ({ children }) => {
  return <Text style={styles.Title}>{children}</Text>;
};
export const TextDescription = ({ children }) => {
  return <Text style={styles.description}>{children}</Text>;
};
export const ContainerImage = ({ source1, source2 }) => {
  return (
    <View style={styles.ContainerImage}>
      <Image style={styles.OrgImage} source={source1} />
      <Image style={styles.OrgImage} source={source2} />
    </View>
  );
};
export const Footer = ({ children }) => {
  return (
    <View style={styles.Footer}>
      <Text style={styles.Text}>{children}</Text>
    </View>
  );
};
export const VersionText = ({ children }) => {
  return (
    <Text style={styles.VersionText}>
      <Text style={styles.Adorno}>* * </Text>
      {children}
      <Text style={styles.Adorno}> * * </Text>
    </Text>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomColor: "#000",
    borderBottomWidth: 10,
  },
  Title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 2,
  },
  Text: { color: "#000" },
  description: { margin: 5, fontSize: 18 },
  ContainerImage: { flex: 1, flexDirection: "row", margin: 1 },
  OrgImage: {
    width: 150,
    objectFit: "contain",
    height: 200,
    margin: 10,
    borderRadius: 30,
  },
  Footer: {
    marginTop: 20,
    alignItems: "center",
  },
  VersionText: {
    paddingVertical: 10,
    color: "#9b9b9b",
  },
  Adorno: {
    color: "#3b83bd",
  },
});
