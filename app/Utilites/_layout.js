import { Stack, router } from "expo-router";
import { Arrow } from "../Styles/Arrow";

const options = {
  ScreenOptions: {
    headerCenter: { headerTitleAlign: "center" },
  },
  SobreNosotros: {
    title: "Sobre Nosotros",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },

  SubidaBajadaView: {
    title: "Subida / Bajada",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
  Places: {
    title: "Lugares",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
};
const LayoutUtilites = () => {
  return (
    <Stack screenOptions={options.ScreenOptions}>
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
