import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SobreNosotros = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Sobre Nosotros</Text>
        <Text style={styles.description}>
          Este proyecto nace con la firme convicción de solucionar una
          problemática que día a día vivimos en colaboración con las siguientes
          organizaciones:
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/plan.png")}
            style={styles.image}
          />
          <Image
            source={require("../../assets/tecmilenio.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.description}>
          Este proyecto se ha desarrollado con la firme convicción de no
          aprovechar, lucrar ni de manejar datos personales de ninguna persona.
        </Text>
        <Text style={styles.description}>
          Juntos, trabajamos para crear un impacto positivo en la comunidad y
          mejorar la vida de las personas.
        </Text>
        <Text style={styles.description}>
          Nuestro objetivo principal es brindar un servicio útil y transparente
          que beneficie tanto a los usuarios como a los posibles transportistas.
        </Text>

        <View style={styles.footer}>
          <Text style={styles.copyright}>© 2024 Roberto Romero Guadarrama</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 2,
  },
  description: { margin: 5, fontSize: 18 },
  imageContainer: { flexDirection: "row", margin: 1 },
  image: {
    width: 150,
    objectFit: "contain",
    height: 200,
    margin: 10,
    borderRadius: 30,
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default SobreNosotros;
