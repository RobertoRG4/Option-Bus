import { Tabs } from "expo-router";
import { FontAwesome6, FontAwesome, Feather } from "@expo/vector-icons";

const options = {
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
    title: "Configuracion",
    Text: "bold",
    tabBarIcon: ({ color }) => (
      <Feather name="settings" size={24} color={color} />
    ),
  },
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3493db",
        tabBarInactiveTintColor: "#707579",
      }}
    >
      <Tabs.Screen name="Map" options={options.home} />
      <Tabs.Screen name="Buses" options={options.buses} />
      <Tabs.Screen name="Settings" options={options.settings} />
    </Tabs>
  );
};

export default TabsLayout;
