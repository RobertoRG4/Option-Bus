import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import AutobusDescriptions from "../Utilites/AutobusDescriptions";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import { Container } from "../Styles/Buses";
import { Provider } from "react-redux";
import { store } from "../state/store";
const Buses = () => {
  const renderItem = ({ item }) => {
    const { key, titulo, tiempo, costo, img, color, directions } = item;
    return (
      <Provider store={store}>
        <GestureHandlerRootView>
          <Pressable onPress={() => router.push(directions)}>
            <AutobusDescriptions
              id={key}
              titulo={titulo}
              tiempo={tiempo}
              costo={costo}
              img={img}
              color={color}
            />
          </Pressable>
        </GestureHandlerRootView>
      </Provider>
    );
  };

  return (
    <Container
      data={Object.values(Bus)}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
};

export default Buses;
