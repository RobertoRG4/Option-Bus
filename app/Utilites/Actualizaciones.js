import { AboutUSContainer, Title, VersionText } from "../Styles/SobreNosotros";
import { ScrollView, Text } from "react-native";
const Actualizaciones = () => {
  return (
    <AboutUSContainer>
      <ScrollView>
        <Title>Versión 1.0</Title>
        <VersionText>20 - Abril - 2024</VersionText>
        <Text>
          Esta primera versión cuenta con 20 rutas dividas alrededor del valle
          de toluca, se integró la posiblidad de ver la ubicación del usuario,
          ademas de tener la posiblidad de alternar entre tener activa y
          desactivarla, se considero el echo de que las rutas sean visibles sin
          la necesidad de tener internet.
        </Text>
      </ScrollView>
    </AboutUSContainer>
  );
};
export default Actualizaciones;
