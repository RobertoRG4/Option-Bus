import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Container, Title, Content, IconText, Button } from "../Styles/Lugares";
const Lugares = ({ data }) => {
  const handlePress = (item) => {
    router.push({
      pathname: "Utilites/Places",
      params: {
        latitude: item.coords.latitude,
        longitude: item.coords.longitude,
      },
    });
  };
  return (
    <Container>
      <Title>Lugares:</Title>
      {data.map((item, index) => (
        <Button key={index} onPress={() => handlePress(item)}>
          <Content>
            <MaterialIcons name="place" size={24} color="rgb(45,156,219)" />
            <IconText>{item.title}</IconText>
          </Content>
        </Button>
      ))}
    </Container>
  );
};

export default Lugares;
