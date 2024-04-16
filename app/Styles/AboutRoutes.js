import { TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AboutRoutes() {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          "Información",
          "Los lugares, paradas y subidas no son absolutos en su totalidad. Esto significa que al dirigirse a un destino específico, solo debe tomar en cuenta la ruta del autobús y decidir si sube o baja en función de su proximidad al lugar deseado."
        )
      }
    >
      <Feather name="info" size={24} color="black" />
    </TouchableOpacity>
  );
}
