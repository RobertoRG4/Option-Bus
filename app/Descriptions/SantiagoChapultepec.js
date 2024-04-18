import Lugares from "../Utilites/Lugares";
import LineaTime from "../Utilites/Componets/LineaTime";
import { Data } from "../../Info/SantiagoChapultepec";
import { Container, Content, Title } from "../Styles/Descriptions";

const SantiagoChapultepec = () => {
  return (
    <Container>
      <Lugares data={Data.Lugares} />
      <Content>
        <Title />
        <LineaTime data={Data.paradasSubidas} />
      </Content>
    </Container>
  );
};
export default SantiagoChapultepec;
