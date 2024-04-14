import Route from "../Styles/Route";
import { Swipeable } from "react-native-gesture-handler";
import { Container, ContentImage, Description } from "../Styles/Bus";
import { useDispatch } from "react-redux";
import { setValue } from "../state/mapUseSlice";
const AutobusDescriptions = ({ id, titulo, tiempo, costo, img, color }) => {
  const dispatch = useDispatch();
  const handlerLeftActions = () => {
    return <Route />;
  };
  const handlerSwipeableOpen = () => {
    dispatch(setValue(id));
  };
  const handlerSwipeableClose = () => {
    dispatch(setValue(null));
  };

  return (
    <Swipeable
      renderLeftActions={handlerLeftActions}
      onSwipeableOpen={handlerSwipeableOpen}
      onSwipeableClose={handlerSwipeableClose}
    >
      <Container key={id}>
        <ContentImage source={img} />
        <Description title={titulo} time={tiempo} price={costo} color={color} />
      </Container>
    </Swipeable>
  );
};

export default AutobusDescriptions;
