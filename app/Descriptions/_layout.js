import { Stack, router } from "expo-router";
import { Arrow } from "../Styles/Arrow";

const options = {
  headerCenter: { headerTitleAlign: "center" },
  SantiagoTlacotepec: {
    title: "Santiago Tlacotepec - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
  SanJuanTilapaTerminal: {
    title: "San Juan Tilapa - Terminal",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
  SanLuisCentro: {
    title: "San Luis - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
  SantiagoChapultepec: {
    title: "Santiago - Chapultepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
  },
};

const descriptionsLayout = () => {
  return (
    <Stack screenOptions={options.headerCenter}>
      <Stack.Screen
        name="SantiagoTlacotepecCentro"
        options={options.SantiagoTlacotepec}
      />
      <Stack.Screen
        name="SanJuanTilapaTerminal"
        options={options.SanJuanTilapaTerminal}
      />
      <Stack.Screen name="SanLuisCentro" options={options.SanLuisCentro} />
      <Stack.Screen
        name="SantiagoChapultepec"
        options={options.SantiagoChapultepec}
      />
    </Stack>
  );
};

export default descriptionsLayout;
