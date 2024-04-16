import { Stack, router } from "expo-router";
import { Arrow } from "../Styles/Arrow";
import AboutRoutes from "../Styles/AboutRoutes";

const options = {
  headerCenter: { headerTitleAlign: "center" },
  SantiagoTlacotepec: {
    title: "Santiago Tlacotepec - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  SanJuanTilapaTerminal: {
    title: "San Juan Tilapa - Terminal",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  PilaresCentro: {
    title: "Pilares - Centro",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  SantiagoChapultepec: {
    title: "Santiago - Chapultepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  VillaFabrica: {
    title: "Villa - Fabrica",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  TenangoMexicaltzingo: {
    title: "Tenango - Mexicaltzingo",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  ValleDelNevado: {
    title: "Valle del Nevado",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  CentroSanFelipe: {
    title: "Centro -  San Felipe - La Joya",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  CentroLasTorresLaPila: {
    title: "Centro - Las Torres -  La Pila",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  ElRefugioSantiagoTlacotepec: {
    title: "El Refugio - Santiago Tlacotepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  SanLuisCentroZinacantepec: {
    title: "San Luis - Centro - Zinacantepec",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
  },
  TerminalLaJet: {
    title: "Terminal - La  Jet",
    headerLeft: () => <Arrow onPress={() => router.back()} />,
    headerRight: () => <AboutRoutes />,
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
      <Stack.Screen name="PilaresCentro" options={options.PilaresCentro} />
      <Stack.Screen
        name="SantiagoChapultepec"
        options={options.SantiagoChapultepec}
      />
      <Stack.Screen name="VillaFabrica" options={options.VillaFabrica} />
      <Stack.Screen
        name="TenangoMexicaltzingo"
        options={options.TenangoMexicaltzingo}
      />
      <Stack.Screen name="ValleDelNevado" options={options.ValleDelNevado} />
      <Stack.Screen name="CentroSanFelipe" options={options.CentroSanFelipe} />
      <Stack.Screen
        name="CentroLasTorresLaPila"
        options={options.CentroLasTorresLaPila}
      />
      <Stack.Screen
        name="ElRefugioSantiagoTlacotepec"
        options={options.ElRefugioSantiagoTlacotepec}
      />
      <Stack.Screen
        name="SanLuisCentroZinacantepec"
        options={options.SanLuisCentroZinacantepec}
      />
      <Stack.Screen name="TerminalLaJet" options={options.TerminalLaJet} />
    </Stack>
  );
};

export default descriptionsLayout;
