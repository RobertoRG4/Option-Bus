import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Styles } from "./Styles";
const SobreNosotros = () => {
  return (
    <View style={Styles.containerAboutUs}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={Styles.titleAboutUs}>Sobre Nosotros</Text>
        <Text style={Styles.descriptionAboutUs}>
          Este proyecto nace con la firme convicción de solucionar una
          problemática que día a día vivimos en colaboración con las siguientes
          organizaciones:
        </Text>
        <View style={Styles.imageContain}>
          <Image
            source={require("../../assets/plan.png")}
            style={Styles.imageAboutUs}
          />
          <Image
            source={require("../../assets/tecmilenio.jpg")}
            style={Styles.imageAboutUs}
          />
        </View>
        <Text style={Styles.descriptionAboutUs}>
          Este proyecto se ha desarrollado con la firme convicción de no
          aprovechar, lucrar ni de manejar datos personales de ninguna persona.
        </Text>
        <Text style={Styles.descriptionAboutUs}>
          Juntos, trabajamos para crear un impacto positivo en la comunidad y
          mejorar la vida de las personas.
        </Text>
        <Text style={Styles.descriptionAboutUs}>
          Nuestro objetivo principal es brindar un servicio útil y transparente
          que beneficie tanto a los usuarios como a los posibles transportistas.
        </Text>

        <View style={Styles.footerAboutUs}>
          <Text>© 2024 Roberto Romero Guadarrama</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SobreNosotros;
