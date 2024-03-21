import React from "react";
import { useLocalSearchParams } from "expo-router";
import Map from "../Tabs/Map";
import { Styles } from "./Styles";
import Container from "../styles/Container";

const Places = () => {
  const { latitude, longitude } = useLocalSearchParams();
  const parsedLatitude = parseFloat(latitude);
  const parsedLongitude = parseFloat(longitude);

  return (
    <Container>
      <Map
        coords={{ parsedLatitude, parsedLongitude }}
        icon={require("../../assets/marcador-de-posicion.png")}
        stylesMarker={Styles.marker}
        coordsDelta={{ latitudeDelta: 0.004, longitudeDelta: 0.004 }}
      />
    </Container>
  );
};
export default Places;
