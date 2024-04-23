import { Stack, router } from "expo-router";
import { Arrow } from "../Styles/Arrow";
import AboutRoutes from "../Styles/AboutRoutes";

const options = {
  headerCenter: { headerTitleAlign: "center" },
  Bus1: {
    title: "Santiago Tlacotepec - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus2: {
    title: "San Juan Tilapa - Terminal",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus3: {
    title: "Pilares - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus4: {
    title: "Santiago - Chapultepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus5: {
    title: "Villa - Fabrica",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus6: {
    title: "Tenango - Mexicaltzingo",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  ValleDelNevado: {
    title: "Valle del Nevado",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus9: {
    title: "Centro -  San Felipe - La Joya",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  CentroLasTorresLaPila: {
    title: "Centro - Las Torres -  La Pila",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus10: {
    title: "El Refugio - Santiago Tlacotepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus11: {
    title: "San Luis - Centro - Zinacantepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus12: {
    title: "Terminal - La  Jet",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus13: {
    title: "Centro - San Bartolomé",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus14: {
    title: "Cacalomacán - Pilares",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  Bus15: {
    title: "San Marcos - San Felipe",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
};

export default function descriptionsLayout() {
  return (
    <Stack screenOptions={options.headerCenter}>
      <Stack.Screen name="1" options={options.Bus1} />
      <Stack.Screen name="2" options={options.Bus2} />
      <Stack.Screen name="3" options={options.Bus3} />
      <Stack.Screen name="4" options={options.Bus4} />
      <Stack.Screen name="5" options={options.Bus5} />
      <Stack.Screen name="6" options={options.Bus6} />
      <Stack.Screen name="ValleDelNevado" options={options.ValleDelNevado} />
      <Stack.Screen name="9" options={options.Bus9} />
      <Stack.Screen
        name="CentroLasTorresLaPila"
        options={options.CentroLasTorresLaPila}
      />
      <Stack.Screen name="10" options={options.Bus10} />
      <Stack.Screen name="11" options={options.Bus11} />
      <Stack.Screen name="12" options={options.Bus12} />
      <Stack.Screen name="13" options={options.Bus13} />
      <Stack.Screen name="14" options={options.Bus14} />
      <Stack.Screen name="15" options={options.Bus15} />
    </Stack>
  );
}
