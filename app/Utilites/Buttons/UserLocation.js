import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../state/locationSlice";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { setUserLocation } from "../../state/userLocationSlice";
import {
  Button,
  Container,
  Content,
  Title,
  Space,
} from "../../Styles/userLocation";
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
    dispatch(setUserLocation(location.coords));
    dispatch(setLocation(true));
  };

  return (
    <Container>
      <Content>
        <Title>Localizacion</Title>
        <Space />
        <Button onPress={toggleLocation} status={status} />
      </Content>
    </Container>
  );
};

export default UserLocation;
