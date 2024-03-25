import Lugares from "../Utilites/Lugares";
import LineaTime from "../Utilites/LineaTime";
import { Data } from "../../Info/SanLuisCentro";
import { Container, Content, Title } from "../Styles/Descriptions";

const SanLuisCentro = () => {
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
export default SanLuisCentro;
