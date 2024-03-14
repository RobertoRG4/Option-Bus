import {
  SantiagoTlacotepecCentro,
  SantiagoTlacotepecCentroRuta,
} from "./SantiagoTlacotepecCentro.js";
import { SanJuanTilapaTerminal } from "./SanJuanTilapaTerminal.js";

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
};
