import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import Loading from "./Styles/Loading";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return <Redirect href="/Tabs/Map" />;
};

export default index;
