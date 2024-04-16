import { Marker } from "react-native-maps";
import { Image } from "react-native";

const MarkerCustom = ({ latitude, longitude, source, size }) => {
  return (
    <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
      <Image source={source} style={{ width: size, height: size }} />
    </Marker>
  );
};

export default MarkerCustom;
