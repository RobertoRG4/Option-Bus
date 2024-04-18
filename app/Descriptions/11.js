import { Container, Content, Title } from "../Styles/Descriptions";
import LineaTime from "../Utilites/Componets/LineaTime";
import { Data } from "../../Info/11";
import Lugares from "../Utilites/Lugares";

const SanLuisCentroZinacantepec = () => {
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
export default SanLuisCentroZinacantepec;
