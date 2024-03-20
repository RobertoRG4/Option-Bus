import { Marker } from "react-native-maps";
import { Image, StyleSheet } from "react-native";

const MarkerCustom = ({ latitude, longitude, source, stylesMarker }) => {
  return (
    <Marker coordinate={{ latitude: latitude, longitude: longitude }}>
      <Image source={source} style={Styles.Icon} />
    </Marker>
  );
};

const Styles = StyleSheet.create({ Icon: { width: 22, height: 22 } });

export default MarkerCustom;
