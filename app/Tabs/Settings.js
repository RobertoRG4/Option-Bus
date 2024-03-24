import { router } from "expo-router";
import UserLocation from "../Utilites/Buttons/UserLocation";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { Container, Button, Title } from "../Styles/Settings";
const Settings = () => {
  return (
    <Provider store={store}>
      <Container>
        <UserLocation />
        <Button onPress={() => router.push("Utilites/SobreNosotros")}>
          <Title>Sobre Nosotros</Title>
        </Button>
      </Container>
    </Provider>
  );
};

export default Settings;
