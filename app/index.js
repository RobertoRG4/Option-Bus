import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { Styles } from "./Utilites/Styles";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return (
      <View style={Styles.loading}>
        <LottieView
          style={Styles.animation}
          source={require("../assets/loader.json")}
          autoPlay
          loop
        />
      </View>
    );
  }

  return <Redirect href="/Tabs/Map" />;
};

export default index;
