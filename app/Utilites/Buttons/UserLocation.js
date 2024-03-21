import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Styles } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../state/locationSlice";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const UserLocation = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.location.value);

  const toggleLocation = () => {
    if (status) {
      dispatch(setLocation(false));
    } else {
      requestLocation();
    }
  };

  const requestLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status != "granted") {
      dispatch(setLocation(false));
      return;
    }
    let location = await getCurrentPositionAsync({});
    dispatch(setLocation(true));
  };

  return (
    <View style={Styles.containerButton}>
      <View style={Styles.flexCenter}>
        <Text style={Styles.fontSizeSettings}>Localizacion</Text>
        <View style={Styles.container} />
        <Pressable onPress={toggleLocation} style={Styles.darkModeButton}>
          {status === true ? (
            <MaterialIcons name="location-on" size={24} color="black" />
          ) : (
            <MaterialIcons name="location-off" size={24} color="black" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default UserLocation;
