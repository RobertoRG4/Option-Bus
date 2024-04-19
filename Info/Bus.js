import { Bus1 } from "./1.js";
import { Bus2 } from "./2.js";
import { Bus3 } from "./3.js";
import { SantiagoChapultepec } from "./SantiagoChapultepec.js";
import { VillaFabrica } from "./VillaFabrica.js";
import { TenangoMexicaltzingo } from "./TenangoMexicaltzingo.js";
import { Bus11 } from "./11.js";
import { Bus9 } from "./9.js";
import { Bus10 } from "./10.js";
import { Bus12 } from "./12.js";
import { Bus13 } from "./13.js";
import { Bus14 } from "./14.js";

export const Bus = {
  1: {
    key: 1,
    titulo: "Santiago Tlacotepec - Centro",
    tiempo: "2 - 5 min",
    costo: "$12",
    color: "#ff0000",
    img: require("../assets/Santiago-Tlacotepec-Centro-Capultitlan.jpg"),
    directions: "/Descriptions/1",
    marks: Bus1,
    points: {
      inicio: { latitude: 19.217271, longitude: -99.671036 },
      fin: { latitude: 19.216914, longitude: -99.672564 },
    },
  },
  /*2: {
    key: 2,
    titulo: "San Juan Tilapa - Terminal",
    tiempo: "2 - 6 min",
    costo: "$12",
    img: require("../assets/SanJuanTilapaTerminal.jpeg"),
    color: "#008000",
    directions: "/Descriptions/2",
    marks: Bus2,
    points: { inicio: {}, fin: {} },
  },*/
  3: {
    key: 3,
    titulo: "Pilares - Centro ",
    tiempo: "4 - 5 min",
    costo: "Distancia",
    img: require("../assets/PilaresCentro.jpg"),
    color: "#AA00FF",
    directions: "/Descriptions/3",
    marks: Bus3,
    points: {
      inicio: { latitude: 19.282891, longitude: -99.73587 },
      fin: { latitude: 19.287825, longitude: -99.594828 },
    },
  },
  /*4: {
    key: 4,
    titulo: "Santiago - Chapultepec",
    tiempo: "8 - 14 min",
    costo: "$14",
    img: require("../assets/SantiagoChapultepecBus.png"),
    color: "#00ffbf",
    directions: "/Descriptions/SantiagoChapultepec",
    marks: SantiagoChapultepec,
    points: { inicio: {}, fin: {} },
  },
  5: {
    key: 5,
    titulo: "Villa - Fabrica",
    tiempo: "7 - 12 min",
    costo: "Distancia",
    img: require("../assets/VillaFabricaCentralDeAbastos.png"),
    color: "#572364",
    directions: "/Descriptions/VillaFabrica",
    marks: VillaFabrica,
    points: { inicio: {}, fin: {} },
  },
  6: {
    key: 6,
    titulo: "Tenango - Mexicaltzingo",
    tiempo: "9 - 12 min",
    costo: "Distancia",
    img: require("../assets/TenangoDelValle.png"),
    color: "#f542b3",
    directions: "/Descriptions/TenangoMexicaltzingo",
    marks: TenangoMexicaltzingo,
    points: { inicio: {}, fin: {} },
  },
  7: {
    key: 7,
    titulo: "Centro - Las Torres - La Pila",
    tiempo: "5 - 7 min",
    costo: "$12",
    img: require("../assets/CentroTerminalTorresPila.jpg"),
    color: "#42ddf5",
    directions: "/Descriptions/CentroLasTorresLaPila",
    marks: [],
    points: { inicio: {}, fin: {} },
  },
  ValleDelNevado: {
    key: 8,
    titulo: "Valle del Nevado - Centro",
    tiempo: "25 - 30 min",
    costo: "Distancia",
    img: require("../assets/ValleDelNevado.jpeg"),
    color: "#b3f542",
    directions: "/Descriptions/ValleDelNevado",
    marks: [],
    points: { inicio: {}, fin: {} },
  },*/
  9: {
    key: 9,
    titulo: "San Felipe - Centro - La Joya",
    tiempo: "8 - 15 min",
    costo: "$12",
    img: require("../assets/CentroSanFelipe.png"),
    color: "#365915",
    directions: "/Descriptions/9",
    marks: Bus9,
    points: {
      fin: { latitude: 19.230404, longitude: -99.670316 },
      inicio: { latitude: 19.231467, longitude: -99.670234 },
    },
  },
  10: {
    key: 10,
    titulo: "El Refugio - Santiago Tlacotepec",
    tiempo: "6 - 9 min",
    costo: "$12",
    img: require("../assets/ElRefugioTerminal.png"),
    color: "#c9c567",
    directions: "/Descriptions/10",
    marks: Bus10,
    points: {
      inicio: { latitude: 19.276931, longitude: -99.64172 },
      fin: { latitude: 19.227776, longitude: -99.703287 },
    },
  },
  11: {
    key: 11,
    titulo: "San Luis - Centro - Zinacantepec",
    tiempo: "8 - 14 min",
    costo: "Distancia",
    img: require("../assets/AutobusSanluisCentro.jpg"),
    color: "#8f8c8c",
    directions: "/Descriptions/11",
    marks: Bus11,
    points: {
      inicio: { latitude: 19.287828, longitude: -99.594839 },
      fin: { latitude: 19.282878, longitude: -99.735932 },
    },
  },
  12: {
    key: 12,
    titulo: "Terminal - Jet",
    tiempo: "4 - 8 min",
    costo: "$12",
    img: require("../assets/TerminalLaJet.png"),
    color: "#d192a7",
    directions: "/Descriptions/12  ",
    marks: Bus12,
    points: {
      inicio: { latitude: 19.227631, longitude: -99.703318 },
      fin: { latitude: 19.278505, longitude: -99.641707 },
    },
  },
  /*13: {
    key: 13,
    titulo: "Centro - San Bartolomé",
    tiempo: "8 - 14 min",
    costo: "$12",
    img: "",
    color: "#0000FF",
    directions: "/Descriptions/13",
    marks: Bus13,
    points: { inicio: {}, fin: {} },
  },*/
  14: {
    key: 14,
    titulo: "Cacalomacán - Pilares",
    tiempo: "8 - 9 min",
    costo: "$12",
    img: require("../assets/Prepa1Pilares.png"),
    color: "#b0df56",
    directions: "/Descriptions/14",
    marks: Bus14,
    points: {
      inicio: { latitude: 19.244907, longitude: -99.713075 },
      fin: { latitude: 19.280139, longitude: -99.584088 },
    },
  },
};
