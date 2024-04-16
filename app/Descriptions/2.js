import { Container, Content, Title } from "../Styles/Descriptions";
import Lugares from "../Utilites/Lugares";
import { Data } from "../../Info/2";
import LineaTime from "../Utilites/LineaTime";
const SanJuanTilapaTerminal = () => {
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
export default SanJuanTilapaTerminal;
