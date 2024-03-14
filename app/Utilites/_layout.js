import { Stack, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Styles } from "./Styles";
const options = {
  SobreNosotros: {
    title: "Sobre Nosotros",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
  SubidaBajadaView: {
    title: "Subida / Bajada",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
  Places: {
    title: "Lugares",
    headerLeft: () => (
      <TouchableOpacity
        style={Styles.paddingHorizontal}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  },
};
const LayoutUtilites = () => {
  return (
    <Stack>
      <Stack.Screen name="SobreNosotros" options={options.SobreNosotros} />
      <Stack.Screen
        name="SubidaBajadaView"
        options={options.SubidaBajadaView}
      />
      <Stack.Screen name="Places" options={options.Places} />
    </Stack>
  );
};
export default LayoutUtilites;
