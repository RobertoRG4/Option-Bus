import { Container, Content, Title } from "../Styles/Descriptions";
import LineaTime from "../Utilites/Componets/LineaTime";
import Lugares from "../Utilites/Lugares";
import { Data } from "../../Info/17";
const Descriptions = () => {
  return (
    <Container>
      <Content>
        <Lugares data={Data.Lugares} />
        <Title />
        <LineaTime data={Data.paradasSubidas} />
      </Content>
    </Container>
  );
};
export default Descriptions;
