import React, { useEffect, useState, lazy, Suspense } from "react";
import { Redirect } from "expo-router";
import { Styles } from "./Utilites/Styles";
import { View } from "react-native";
import LottieView from "lottie-react-native";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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

  return <Redirect href="/Componets/Map" />;
};

export default index;
