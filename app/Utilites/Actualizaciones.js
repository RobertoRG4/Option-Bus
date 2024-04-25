import { AboutUSContainer, Title, VersionText } from "../Styles/SobreNosotros";
import { ScrollView, Text } from "react-native";
const Actualizaciones = () => {
  return (
    <AboutUSContainer>
      <ScrollView>
        <Title>Versión 1.0</Title>
        <VersionText>25 - Abril - 2024</VersionText>
        <Text>
          Incluye rutas en el valle de Toluca, cuidadosamente seleccionadas para
          ofrecer una experiencia diversa.
        </Text>
        <Text></Text>
        <Text>
          Introducción de la función de ubicación del usuario para una
          navegación más precisa.
        </Text>
        <Text></Text>
        <Text>
          Posibilidad de activar o desactivar la función de ubicación según las
          preferencias del usuario.
        </Text>
        <Text></Text>
        <Text>
          Optimización para permitir la visualización de rutas sin conexión a
          internet, garantizando accesibilidad en todas las circunstancias.
        </Text>
      </ScrollView>
    </AboutUSContainer>
  );
};
export default Actualizaciones;
