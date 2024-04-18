import LineaTime from "../Utilites/Componets/LineaTime";
import { Data } from "../../Info/1";
import Lugares from "../Utilites/Lugares";
import { Container, Content, Title } from "../Styles/Descriptions";

const SantiagoTlacotepecCentro = () => {
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

export default SantiagoTlacotepecCentro;
