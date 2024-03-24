import { SantiagoTlacotepecCentroRuta } from "./SantiagoTlacotepecCentro.js";
import { SanJuanTilapaTerminal } from "./SanJuanTilapaTerminal.js";
import { SanLuisCentro } from "./SanLuisCentro.js";
import { SantiagoChapultepec } from "./SantiagoChapultepec.js";

export const Bus = {
  SantiagoTlacotepecCentro: {
    key: 1,
    titulo: "Santiago Tlacotepec - Centro",
    tiempo: "2 - 5 min",
    costo: "$12",
    color: "#ff0000",
    img: require("../assets/Santiago-Tlacotepec-Centro-Capultitlan.jpg"),
    directions: "/Descriptions/SantiagoTlacotepecCentro",
    marks: SantiagoTlacotepecCentroRuta,
  },
  SanJuanTilapaTerminal: {
    key: 2,
    titulo: "San Juan Tilapa - Terminal",
    tiempo: "2 - 6 min",
    costo: "$12",
    img: require("../assets/SanJuanTilapaTerminal.jpeg"),
    color: "#008000",
    directions: "/Descriptions/SanJuanTilapaTerminal",
    marks: SanJuanTilapaTerminal,
  },
  SanLuisCentro: {
    key: 3,
    titulo: "San Luis - Centro",
    tiempo: "4 - 5 min",
    costo: "Distancia",
    img: require("../assets/AutobusSanluisCentro.jpg"),
    color: "#AA00FF",
    directions: "/Descriptions/SanLuisCentro",
    marks: SanLuisCentro,
  },
  SantiagoChapultepec: {
    key: 4,
    titulo: "Santiago - Chapultepec",
    tiempo: "8 - 14 min",
    costo: "$14",
    img: require("../assets/SantiagoChapultepecBus.png"),
    color: "#ff8000",
    directions: "/Descriptions/SantiagoChapultepec",
    marks: SantiagoChapultepec,
  },
};
