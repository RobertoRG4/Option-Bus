import Timeline from "react-native-timeline-flatlist";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Container from "../Styles/Container";
import {
  Title,
  ContainerHorizontal,
  Description,
  TextButton,
  Button,
} from "../Styles/LineaTime";
import { StyleSheet } from "react-native";
const LineaTime = ({ data }) => {
  const handlePress = (item) => {
    router.push({
      pathname: "/Utilites/SubidaBajadaView",
      params: {
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
        title: item.title,
      },
    });
  };

  const Render = ({ item }) => {
    return (
      <ContainerHorizontal>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        <Button onPress={() => handlePress(item)}>
          <TextButton>Ver Parada</TextButton>
        </Button>
      </ContainerHorizontal>
    );
  };

  return (
    <Container>
      <Timeline
        data={data}
        innerCircle="icon"
        circleSize={40}
        circleColor="rgb(45,156,219)"
        lineColor="rgb(45,156,219)"
        descriptionStyle="#ccc"
        showTime={false}
        options={{
          style: Styles.TimeLine,
        }}
        renderDetail={(item) => <Render item={item} />}
        iconDefault={
          <MaterialCommunityIcons
            name="bus-stop-covered"
            size={20}
            color="#fff"
          />
        }
      />
    </Container>
  );
};
const Styles = StyleSheet.create({
  TimeLine: { width: 360, alignSelf: "center" },
});

export default LineaTime;
