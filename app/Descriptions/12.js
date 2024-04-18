import { Container, Content, Title } from "../Styles/Descriptions";
import LineaTime from "../Utilites/Componets/LineaTime";
import Lugares from "../Utilites/Lugares";
import { Data } from "../../Info/12";

const TerminalLaJet = () => {
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
export default TerminalLaJet;
