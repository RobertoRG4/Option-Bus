import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  paddingHorizontal: { paddingHorizontal: 15 },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    flex: 1,
    width: 400,
  },
  carta: {
    width: "90%",
    margin: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  contenido: {
    flexDirection: "row",
    alignItems: "center",
  },
  caracteristicas: {
    flexDirection: "row",
    gap: 50,
  },
  imagen: {
    width: 80,
    height: 80,
    borderRadius: 5,
    overflow: "hidden",
    marginRight: 10,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  imagenCarta: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  informacion: {
    flex: 1,
    paddingVertical: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  lineRouter: {
    marginTop: 5,
    height: 5,
    width: "95%",
  },
  settingButton: {
    padding: 10,
    margin: 5,
  },
  settingText: {
    fontSize: 20,
  },
});
