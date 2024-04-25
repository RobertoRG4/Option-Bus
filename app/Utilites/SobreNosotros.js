import {
  AboutUSContainer,
  ContainerImage,
  TextDescription,
  Title,
  Footer,
} from "../Styles/SobreNosotros";
import { ScrollView } from "react-native";

const SobreNosotros = () => {
  return (
    <AboutUSContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Sobre Nosotros</Title>
        <TextDescription>
          Este proyecto nace con la firme convicción de solucionar una
          problemática que día a día vivimos en colaboración con las siguientes
          organizaciones:
        </TextDescription>
        <ContainerImage
          source1={require("../../assets/plan.png")}
          source2={require("../../assets/tecmilenio.jpg")}
        />
        <TextDescription>
          Este proyecto se ha desarrollado con la firme convicción de no
          aprovechar, lucrar ni de manejar datos personales de ninguna persona.
        </TextDescription>
        <TextDescription>
          Juntos, trabajamos para crear un impacto positivo en la comunidad y
          mejorar la vida de las personas.
        </TextDescription>
        <TextDescription>
          Nuestro objetivo principal es brindar un servicio útil y transparente
          que beneficie tanto a los usuarios como a los posibles transportistas.
        </TextDescription>
        <Footer>© 2024 All rights reserved</Footer>
      </ScrollView>
    </AboutUSContainer>
  );
};

export default SobreNosotros;
