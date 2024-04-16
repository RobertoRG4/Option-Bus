import { Stack } from "expo-router";

const options = {
  headerHidden: { headerShown: false, animation: "none" },
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={options.headerHidden} />
      <Stack.Screen name="Tabs" options={options.headerHidden} />
      <Stack.Screen name="Descriptions" options={options.headerHidden} />
      <Stack.Screen name="Utilites" options={options.headerHidden} />
    </Stack>
  );
}
