export const pieDrilldownBase = {
  chart: {
    type: 'pie',
    animation: false,
  },
  title: {
    text: '',
  },
  xAxis: {
    type: 'category',
  },
  credits: {
    enabled: false,
  },
  legend: {
    enabled: true,
  },

  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
      },
    },
  },

  series: [
    {
      name: 'NPT',
      colorByPoint: true,
      data: [
        {
          name: 'Productivo',
          y: 5,
          drilldown: 'productivo',
        },
        {
          name: 'Esperas',
          y: 2,
          drilldown: 'esperas',
        },
        {
          name: 'Problemas',
          y: 2,
          drilldown: 'problemas',
        },
      ],
    },
  ],
  drilldown: {
    drillUpButton: {
      text: '<<Regresar',
      position: {
        align: 'left',
        verticalAlign: 'top',
      },
    },
    series: [
      {
        id: 'productivo',
        name: 'Productivo',
        data: [
          { name: 'Instala', y: 2, drilldown: 'instala' },
          { name: 'Opera', y: 3, drilldown: 'opera' },
        ],
      },
      {
        id: 'esperas',
        name: 'Esperas',
        data: [
          { name: 'Meter Aparejo', y: 1 },
          { name: 'Probar Bomba', y: 1 },
        ],
      },
      {
        id: 'problemas',
        name: 'Problemas',
        data: [
          { name: 'Sarta atorada', y: 1 },
          { name: 'Bomba asolvada', y: 2 },
        ],
      },
    ],
  },
};

export const barDefault = {
  chart: {
    type: 'bar',
    backgroundColor: '#33FF33',      
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  legend: {
    floating: true,
  },
  xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Total fruit consumption',
    },
  },
  plotOptions: {
    series: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: 'John',
      data: [5, 3, 4, 7, 2],
    },
    {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
    },
    {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
    },
  ],
};

// spline

// type: 'scatter',

export const desplazamiento = {
  chart: {
    type: 'spline',    
    backgroundColor: '#ff0000',
  },
  legend: {
    floating: true,
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },  
  xAxis: {
    title: {
      text: 'Desplazamiento',
    },
    min: -500,
    max: 1500,
    opposite: true,
    gridLineWidth: 1,
    tickInterval: 200,
  },
  yAxis: {
    title: {
      text: 'TVD',
    },
    reversed: true,
    tickInterval: 200,
  },
  plotOptions: {
    series: {
      lineWidth: 3,
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.point.name;
        },
      },
    },
  },
  series: [],
};

export const config_tres = {
  chart: {
    type: 'spline',
    zoomType: 'xy',
    animation: {
      enabled: false,
    },
    backgroundColor: '#ff0000',    
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  legend: {
    floating: true,
  },
  xAxis: {
    title: {
      text: 'Desplazamiento',
    },
    opposite: true,
    gridLineWidth: 1,
    min: 0,
    max: 5,
    tickInterval: 1,
    minorTickInterval: 0.5,
  },
  yAxis: {
    title: {
      text: 'TVD',
    },
    reversed: true,
    max: 3000,
  },
  plotOptions: {
    series: {
      lineWidth: 3,
      dataLabels: {
        enabled: true,
        formatter: function() {
          return this.point.name;
        },
      },
    },
  },
  series: [],
};

export const ejeCruzado = {
  chart: {
    type: 'spline',
    zoomType: 'xy',
    animation: {
      enabled: false,
    },
    backgroundColor: '#ff0000',
    spacingBottom: 15,
    spacingTop: 10,
    spacingLeft: 10,
    spacingRight: 10,
  },
  title: {
    text: '',
  },
  credits: {
    enabled: false,
  },
  annotations: [
    {
      labels: [
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 5,
            y: 900,
          },
          text: 'Norte',
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 5,
            y: -950,
          },
          text: 'Sur',
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: -900,
            y: 5,
          },
          text: 'Oeste',
        },
        {
          point: {
            xAxis: 0,
            yAxis: 0,
            x: 900,
            y: 5,
          },
          text: 'Este',
        },
      ],
    },
  ],
  legend: {
    floating: true,
  },
  xAxis: {
    gridLineWidth: 1,
    tickInterval: 200,
    lineColor: 'black',
    crossing: 0,
    opposite: true,
    min: -1000,
    max: 1000,
  },
  yAxis: {
    tickInterval: 200,
    lineWidth: 1,
    lineColor: 'black',
    crossing: 0,
    title: {
      text: null,
    },
    min: -1000,
    max: 1000,
  },
  series: [],
};

// export const rumbo = {
//   chart: {
//     type: 'spline',
//     zoomType: 'xy',
//     animation: {
//       enabled: false,
//     },
//   },
//   title: {
//     text: '',
//   },
//   annotations: [
//     {
//       labels: [
//         {
//           point: "max",
//           text: "Max"
//         },
//         {
//           point: "min",
//           text: "Min",
//           backgroundColor: "white"
//         }
//       ]
//     }
//   ],
//   credits: {
//     enabled: false,
//   },
//   legend: {
//     floating: true,
//   },
//   xAxis: {
//     min: -1000,
//     max: 1000,
//     tickInterval: 200,
//     gridLineWidth: 1,
//     plotLines: [
//       {
//         color: '#000000',
//         width: 2,
//         value: 0,
//       },
//     ],
//   },
//   yAxis: {
//     title: {
//       text: 'Y Co-ordinate',
//     },
//     tickInterval: 200,
//     min: -1000,
//     max: 1000,
//     plotLines: [
//       {
//         color: '#000000',
//         width: 2,
//         value: 0,
//       },
//     ],
//   },

//   series: [],
// };
