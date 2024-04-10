import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View style={Styles.Loading}>
      <LottieView
        style={Styles.Animation}
        source={require("../../assets/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  Loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  Animation: {
    flex: 1,
    width: 400,
  },
});
