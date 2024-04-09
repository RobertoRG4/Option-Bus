import { Button, Title } from "../../Styles/Settings";
import { router } from "expo-router";
const Actualizaciones = () => {
  return (
    <Button onPress={() => router.push("Utilites/Actualizaciones")}>
      <Title>Actualizaciones</Title>
    </Button>
  );
};
export default Actualizaciones;
