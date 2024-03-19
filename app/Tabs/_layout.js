import { Tabs } from "expo-router";
import {
  FontAwesome6,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const options = {
  ScreenOptions: {
    tabBarActiveTintColor: "#3493db",
    tabBarInactiveTintColor: "#707579",
  },
  home: {
    headerShown: false,
    tabBarIcon: ({ color }) => (
      <FontAwesome6 name="map-location" size={24} color={color} />
    ),
  },
  buses: {
    title: "Buses",
    tabBarIcon: ({ color }) => (
      <FontAwesome name="bus" size={24} color={color} />
    ),
  },
  settings: {
    title: "Información",
    Text: "bold",
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons
        name="information-outline"
        size={24}
        color={color}
      />
    ),
  },
};

const TabsLayout = () => {
  return (
    <Tabs screenOptions={options.ScreenOptions}>
      <Tabs.Screen name="Map" options={options.home} />
      <Tabs.Screen name="Buses" options={options.buses} />
      <Tabs.Screen name="Informacion" options={options.settings} />
    </Tabs>
  );
};

export default TabsLayout;
