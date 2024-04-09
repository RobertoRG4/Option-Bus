import { router } from "expo-router";
import UserLocation from "../Utilites/Buttons/UserLocation";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { Container, Button, Title } from "../Styles/Settings";
import SobreNosotros from "../Utilites/Buttons/SobreNosotros";
import Actualizaciones from "../Utilites/Buttons/Actualizaciones";
const Settings = () => {
  return (
    <Provider store={store}>
      <Container>
        <UserLocation />
        <SobreNosotros />
        <Actualizaciones />
      </Container>
    </Provider>
  );
};

export default Settings;
