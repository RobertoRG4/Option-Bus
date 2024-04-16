import { Data } from "../../Info/ElRefugioSantiagoTlacotepec";
import { Container, Content, Title } from "../Styles/Descriptions";
import LineaTime from "../Utilites/LineaTime";
import Lugares from "../Utilites/Lugares";
const ElRefugioTerminal = () => {
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
export default ElRefugioTerminal;
