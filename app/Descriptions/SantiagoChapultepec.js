import { View, Text } from "react-native";
import { Styles } from "../Utilites/Styles";
import Lugares from "../Utilites/Lugares";
import LineaTime from "../Utilites/LineaTime";
import { Data } from "../../Info/SantiagoChapultepec";

const SantiagoChapultepec = () => {
  return (
    <View style={Styles.containerBackground}>
      <Lugares data={Data.Lugares} />
      <View style={Styles.container}>
        <Text style={Styles.textStops}>Paradas / Subidas</Text>
        <LineaTime data={Data.paradasSubidas} />
      </View>
    </View>
  );
};
export default SantiagoChapultepec;
