import Map from "../Tabs/Map";
import { useLocalSearchParams } from "expo-router";
import Container from "../Styles/Container";

const Places = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <Container>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/marcador-de-posicion.png")}
        coordsDelta={{ latitudeDelta: 0.03, longitudeDelta: 0.03 }}
      />
    </Container>
  );
};
export default Places;
