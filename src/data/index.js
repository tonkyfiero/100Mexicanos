const dataEncuestas = [
  {
    id: 1,
    pregunta:"1-Forma popular de decir niño?",
    respuestas:[{
      posicion:1,
      puntos:38,
      respuesta:"chamaco"
    },{
      posicion:2,
      puntos:26,
      respuesta:"bebe"
    },
    {
      posicion:3,
      puntos:22,
      respuesta:"escuintle"
    },
    {
      posicion:4,
      puntos:14,
      respuesta:"chiquillo"
    },
    ]   
  },
  {
    id: 2,
    pregunta:"Proposito de año nuevo ?",
    respuestas:[{
      posicion:1,
      puntos:33,
      respuesta:"Hacer dieta"
    },{
      posicion:2,
      puntos:27,
      respuesta:"Hacer ejercicio"
    },
    {
      posicion:3,
      puntos:17,
      respuesta:"ahorrar"
    },
    {
      posicion:4,
      puntos:9,
      respuesta:"comprar algo nuevo articulo"
    }]   
  },
  {
    id: 3,
    pregunta:"Platillo de navidad ?",
    respuestas:[{
      posicion:1,
      puntos:39,
      respuesta:"Pavo"
    },{
      posicion:2,
      puntos:32,
      respuesta:"Bacalao"
    },
    {
      posicion:3,
      puntos:12,
      respuesta:"Romeritos"
    },
    {
      posicion:4,
      puntos:50,
      respuesta:"Lomo / Pierna"
    }]   
  },
  {
    id: 4,
    pregunta:"Fruta que tenga semillas ?",
    respuestas:[{
      posicion:1,
      puntos:22,
      respuesta:"Naranja"
    },{
      posicion:2,
      puntos:18,
      respuesta:"Manzana"
    },
    {
      posicion:3,
      puntos:12,
      respuesta:"Sandia"
    },
    {
      posicion:4,
      puntos:50,
      respuesta:"Limon"
    }]   
  },
  
];

const fechasPos = [
  "2020-10-19",
  "2020-10-20",
  "2020-10-21",
  "2020-10-22",
  "2020-10-23",
  "2020-10-24",
  "2020-10-25",
];

const statuses = [
  {
    status: "open",
    icon: "⭕️",
    color: "#EB5A46",
  },
  {
    status: "in progress",
    icon: "🔆️",
    color: "#00C2E0",
  },
  {
    status: "in review",
    icon: "📝",
    color: "#C377E0",
  },
  {
    status: "done",
    icon: "✅",
    color: "#3981DE",
  },
];

export { dataEncuestas, fechasPos,statuses };
