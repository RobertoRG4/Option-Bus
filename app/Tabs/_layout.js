import { Tabs } from "expo-router";
import { FontAwesome6, FontAwesome, Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { store } from "../state/store";
import Loading from "../Styles/Loading";
import { View } from "react-native";

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
    title: "Configuración",
    Text: "bold",
    tabBarIcon: ({ color }) => (
      <Feather name="settings" size={24} color={color} />
    ),
  },
};

const TabsLayout = () => {
  const [mapReady, setMapReady] = useState(false);
  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setMapReady(store.getState().mapReady.value);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  console.log(mapReady);

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={options.ScreenOptions}>
        <Tabs.Screen name="Map" options={options.home} />
        <Tabs.Screen name="Buses" options={options.buses} />
        <Tabs.Screen name="Settings" options={options.settings} />
      </Tabs>
    </View>
  );
};

export default TabsLayout;
