import { Container, Content, Title } from "../Styles/Descriptions";
import LineaTime from "../Utilites/Componets/LineaTime";
import Lugares from "../Utilites/Lugares";
import { Data } from "../../Info/6";

const TenangoMexicaltzingo = () => {
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

export default TenangoMexicaltzingo;
