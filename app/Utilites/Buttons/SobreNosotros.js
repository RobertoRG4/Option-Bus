import { Title } from "../../Styles/userLocation";
import { Button } from "../../Styles/Settings";
import { router } from "expo-router";

const SobreNosotros = () => {
  return (
    <Button onPress={() => router.push("Utilites/SobreNosotros")}>
      <Title>Sobre Nosotros</Title>
    </Button>
  );
};

export default SobreNosotros;
