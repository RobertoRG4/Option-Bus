import { Container, ContentImage, Description } from "../Styles/Bus";

const AutobusDescriptions = ({ id, titulo, tiempo, costo, img, color }) => {
  return (
    <Container key={id}>
      <ContentImage source={img} />
      <Description title={titulo} time={tiempo} price={costo} color={color} />
    </Container>
  );
};

export default AutobusDescriptions;
