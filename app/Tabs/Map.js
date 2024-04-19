import React, { useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE, Polyline } from "react-native-maps";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Bus } from "../../Info/Bus";
import MarkerCustom from "../Styles/MarkerCustom";
import { MapContainer, MyLocationButton } from "../Styles/Map";
import { store } from "../state/store";
import Loading from "../Styles/Loading";
import { setMapReady } from "../state/mapReadySlice";
import MarkerPoint from "../Styles/MarkerPoint";

const Map = ({ coords, icon, coordsDelta }) => {
  const [markerVisible, setMarkerVisible] = useState(!!coords);
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [itsMyLocation, setItsMyLocation] = useState({});
  const [mapReady, setMapOnReady] = useState(false);
  const [renderMapId, setRenderMapId] = useState(null);
  const mapViewRef = useRef(null);

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
      setMapOnReady(store.getState().mapReady.value);
      setRenderMapId(store.getState().mapId.value);
    });
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

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

  if (renderMapId === null) {
    return (
      <MapContainer>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFill}
          initialRegion={INITIAL_REGION}
          showsUserLocation={showUserLocation}
          showsMyLocationButton={false}
          showsCompass={false}
          onMapReady={() => {
            setTimeout(() => {
              store.dispatch(setMapReady(true));
            }, 2000);
          }}
        >
          {markerVisible && (
            <MarkerCustom
              latitude={coords.parsedLatitude}
              longitude={coords.parsedLongitude}
              source={icon}
              size={25}
            />
          )}
          <Polyline
            coordinates={Bus[1].marks}
            strokeColor={Bus[1].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[1].directions)}
          />
          {/*<Polyline
            coordinates={Bus[2].marks}
            strokeColor={Bus[2].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[2].directions)}
          />*/}
          <Polyline
            coordinates={Bus[3].marks}
            strokeColor={Bus[3].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[3].directions)}
          />
          {/*<Polyline
            coordinates={Bus[4].marks}
            strokeColor={Bus[4].color}
            tappable={true}
            strokeWidth={5}
            onPress={() => router.push(Bus[4].directions)}
          />
          <Polyline
            coordinates={Bus[5].marks}
            strokeColor={Bus[5].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[5].directions)}
          />
          <Polyline
            coordinates={Bus[6].marks}
            strokeColor={Bus[6].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[6].directions)}
          />
          <Polyline
            coordinates={Bus[7].marks}
            strokeColor={Bus[7].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[7].directions)}
          />*/}
          {/* <Polyline /> --> nevado del valle*/}
          <Polyline
            coordinates={Bus[9].marks}
            strokeColor={Bus[9].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[9].directions)}
          />
          <Polyline
            coordinates={Bus[10].marks}
            strokeColor={Bus[10].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[10].directions)}
          />
          <Polyline
            coordinates={Bus[11].marks}
            strokeColor={Bus[11].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[11].directions)}
          />

          <Polyline
            coordinates={Bus[12].marks}
            strokeColor={Bus[12].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[12].directions)}
          />
          {/*<Polyline
            coordinates={Bus[13].marks}
            strokeColor={Bus[13].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[13].directions)}
          />*/}

          <Polyline
            coordinates={Bus[14].marks}
            strokeColor={Bus[14].color}
            strokeWidth={5}
            tappable={true}
            onPress={() => router.push(Bus[14].directions)}
          />
        </MapView>
        {!mapReady && <Loading />}
        {showUserLocation && <MyLocationButton onPress={goToUserLocation} />}
      </MapContainer>
    );
  } else {
    return (
      <MapContainer>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFill}
          initialRegion={INITIAL_REGION}
          showsUserLocation={showUserLocation}
          showsMyLocationButton={false}
          showsCompass={false}
          onMapReady={() => {
            setTimeout(() => {
              store.dispatch(setMapReady(true));
            }, 2000);
          }}
        >
          {markerVisible && (
            <MarkerCustom
              latitude={coords.parsedLatitude}
              longitude={coords.parsedLongitude}
              source={icon}
              size={25}
            />
          )}
          <Polyline
            coordinates={Bus[renderMapId].marks}
            strokeColor={Bus[renderMapId].color}
            tappable={true}
            strokeWidth={5}
            onPress={() => router.push(Bus[renderMapId].directions)}
          />
          <MarkerPoint
            cordinates={Bus[renderMapId].points.inicio}
            Title="Inicio"
          />
          <MarkerPoint cordinates={Bus[renderMapId].points.fin} Title="Fin" />
        </MapView>
        {!mapReady && <Loading />}
        {showUserLocation && <MyLocationButton onPress={goToUserLocation} />}
      </MapContainer>
    );
  }
};

export default Map;
