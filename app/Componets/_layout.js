import { Tabs } from "expo-router";
import { FontAwesome6, FontAwesome, Feather } from "@expo/vector-icons";

const options = {
  home: {
    headerShown: false,
    tabBarIcon: () => <FontAwesome6 name="map-location" size={24} />,
  },
  buses: {
    title: "Buses",
    tabBarIcon: () => <FontAwesome name="bus" size={24} />,
  },
  settings: {
    title: "Configuracion",
    tabBarIcon: () => <Feather name="settings" size={24} />,
  },
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="Map" options={options.home} />
      <Tabs.Screen name="Buses" options={options.buses} />
      <Tabs.Screen name="Settings" options={options.settings} />
    </Tabs>
  );
};

export default TabsLayout;
