import LineaTime from "../Utilites/LineaTime";
import { Data } from "../../Info/SantiagoTlacotepecCentro";
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
