import { useColorScheme } from "react-native";
import {
  Container,
  ContentImage,
  Description,
} from "../styles/AutobusDescriptions";

const AutobusDescriptions = ({ id, titulo, tiempo, costo, img, color }) => {
  const theme = useColorScheme();
  return (
    <Container key={id} theme>
      <ContentImage source={img} />
      <Description
        title={titulo}
        time={tiempo}
        price={costo}
        color={color}
        theme={theme}
      />
    </Container>
  );
};

export default AutobusDescriptions;
