import { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import MarkerCustom from "../Styles/MarkerCustom";
import { MapContainer, MyLocationButton } from "../Styles/Map";
import { store } from "../state/store";
import Loading from "../Styles/Loading";
import { setMapReady } from "../state/mapReadySlice";

const Map = ({ coords, icon, coordsDelta }) => {
  const INITIAL_REGION = coords
    ? {
        latitude: coords.parsedLatitude,
        longitude: coords.parsedLongitude,
        latitudeDelta: coordsDelta.latitudeDelta,
        longitudeDelta: coordsDelta.longitudeDelta,
      }
    : {
        latitude: 19.2839943,
        longitude: -99.6548142,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      };
  const [markerVisible, setMarkerVisible] = useState(!!coords);
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [itsMyLocation, setItsMyLocation] = useState({});
  const [mapReady, setMapOnReady] = useState(false);

  useEffect(() => {
    if (mapReady) {
      store.dispatch(setMapReady(true));
    }
  }, [mapReady]);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = store.subscribe(() => {
      setShowUserLocation(store.getState().location.value);
      setItsMyLocation(store.getState().userLocation.value);
      setMapReady(mapReady);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
  const mapViewRef = useRef(null);

  const goToUserLocation = () => {
    if (itsMyLocation) {
      mapViewRef.current.animateToRegion({
        latitude: itsMyLocation.latitude,
        longitude: itsMyLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  return (
    <MapContainer>
      <MapView
        ref={mapViewRef}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        initialRegion={INITIAL_REGION}
        liteMode={true}
        showsUserLocation={showUserLocation}
        showsMyLocationButton={false}
        showsCompass={false}
        onMapReady={() => {
          setTimeout(() => {
            setMapOnReady(true);
          }, 3000);
        }}
      >
        {markerVisible && (
          <MarkerCustom
            latitude={coords.parsedLatitude}
            longitude={coords.parsedLongitude}
            source={icon}
          />
        )}
        <Polyline
          coordinates={Bus.SantiagoChapultepec.marks}
          strokeColor={Bus.SantiagoChapultepec.color}
          tappable={true}
          strokeWidth={5}
          onPress={() => router.push(Bus.SantiagoChapultepec.directions)}
        />
        <Polyline
          coordinates={Bus.SantiagoTlacotepecCentro.marks}
          strokeColor={Bus.SantiagoTlacotepecCentro.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.SantiagoTlacotepecCentro.directions)}
        />
        {/*<Polyline
          coordinates={Bus.SanJuanTilapaTerminal.marks}
          strokeColor="#008000"
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push("Descriptions/SanJuanTilapaTerminal")}
        />*/}

        <Polyline
          coordinates={Bus.PilaresCentro.marks}
          strokeColor={Bus.PilaresCentro.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.PilaresCentro.directions)}
        />

        <Polyline
          coordinates={Bus.VillaFabrica.marks}
          strokeColor={Bus.VillaFabrica.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.VillaFabrica.directions)}
        />
        <Polyline
          coordinates={Bus.ElRefugioSantiagoTlacotepec.marks}
          strokeColor={Bus.ElRefugioSantiagoTlacotepec.color}
          strokeWidth={5}
          tappable={true}
          onPress={() =>
            router.push(Bus.ElRefugioSantiagoTlacotepec.directions)
          }
        />
        <Polyline
          coordinates={Bus.TenangoMexicaltzingo.marks}
          strokeColor={Bus.TenangoMexicaltzingo.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.TenangoMexicaltzingo.directions)}
        />
        <Polyline
          coordinates={Bus.CentroLasTorresLaPila.marks}
          strokeColor={Bus.CentroLasTorresLaPila.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.CentroLasTorresLaPila.directions)}
        />
        <Polyline
          coordinates={Bus.SanLuisCentroZinacantepec.marks}
          strokeColor={Bus.SanLuisCentroZinacantepec.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.SanLuisCentroZinacantepec.directions)}
        />
        <Polyline
          coordinates={Bus.SanFelipeCentro.marks}
          strokeColor={Bus.SanFelipeCentro.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.SanFelipeCentro.directions)}
        />

        <Polyline
          coordinates={Bus.TerminalJet.marks}
          strokeColor={Bus.TerminalJet.color}
          strokeWidth={5}
          tappable={true}
          onPress={() => router.push(Bus.TerminalJet.directions)}
        />
        <Polyline
          coordinates={Bus.CentroSanBartolome.marks}
          strokeColor={Bus.CentroSanBartolome.color}
          strokeWidth={5}
        />

        <Polyline
          coordinates={Bus.Prepa1Pilares.marks}
          strokeColor={Bus.Prepa1Pilares.color}
          strokeWidth={5}
        />
      </MapView>
      {!mapReady && <Loading />}
      {showUserLocation && <MyLocationButton onPress={goToUserLocation} />}
    </MapContainer>
  );
};

export default Map;
