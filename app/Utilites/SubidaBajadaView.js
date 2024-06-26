import { useLocalSearchParams } from "expo-router";
import Container from "../Styles/Container";
import Map from "../Tabs/Map";

const SubidaBajadaView = () => {
  const { latitude, longitude } = useLocalSearchParams();

  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <Container>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/estacion-de-autobuses.png")}
        coordsDelta={{ latitudeDelta: 0.005, longitudeDelta: 0.005 }}
      />
    </Container>
  );
};
export default SubidaBajadaView;
