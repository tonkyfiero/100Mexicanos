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
    type: 'bar'
},
title: {
    text: 'Stacked bar chart'
},
xAxis: {
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
},
yAxis: {
    min: 0,
    title: {
        text: 'Total fruit consumption'
    }
},
legend: {
    reversed: true
},
plotOptions: {
    series: {
        stacking: 'normal'
    }
},
series: [{
    name: 'John',
    data: [5, 3, 4, 7, 2]
}, {
    name: 'Jane',
    data: [2, 2, 3, 2, 1]
}, {
    name: 'Joe',
    data: [3, 4, 4, 2, 5]
}]
};
