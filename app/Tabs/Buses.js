import { Pressable } from "react-native";
import AutobusDescriptions from "../Utilites/AutobusDescriptions";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import { Container } from "../Styles/Buses";

const Buses = () => {
  return (
    <Container>
      {Object.values(Bus).map(
        ({ key, titulo, tiempo, costo, img, color, directions }) => (
          <Pressable key={key} onPress={() => router.push(directions)}>
            <AutobusDescriptions
              titulo={titulo}
              tiempo={tiempo}
              costo={costo}
              img={img}
              color={color}
            />
          </Pressable>
        )
      )}
    </Container>
  );
};

export default Buses;
