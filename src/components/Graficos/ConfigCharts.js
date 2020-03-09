export const pieDrilldownBase = {
  chart: {
    type: 'pie',
    animation: false,
    height: 350,
    width: 500,
    spacingBottom: 15,
    spacingTop: 10,
    spacingLeft: 10,
    spacingRight: 10,
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

export const desplazamiento = {
  chart: {
    type: 'spline',
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
    scatter: {
      marker: {
        radius: 5,
        states: {
          hover: {
            enabled: true,
            lineColor: 'rgb(100,100,100)',
          },
        },
      },
      states: {
        hover: {
          marker: {
            enabled: false,
          },
        },
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x} cm, {point.y} kg',
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
      lineWidth: 1,
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
    height: 300,
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

export const graficaAvance = {
  chart: {
    type: 'spline',
    animation: false,
  },
  title: {
    text: 'Monthly Average Temperature',
  },
  subtitle: {
    text: 'Source: WorldClimate.com',
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: {
    title: {
      text: 'Temperature',
    },
    labels: {
      formatter: function() {
        return this.value + '°';
      },
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  plotOptions: {
    series: {
      animation: {
        duration: 0,
      },
    },
    spline: {
      marker: {
        radius: 4,
        lineColor: '#666666',
        lineWidth: 1,
      },
    },
  },
  series: [
    {
      name: 'Tokyo',
      marker: {
        symbol: 'square',
      },
      data: [
        7.0,
        6.9,
        9.5,
        14.5,
        18.2,
        21.5,
        25.2,
        {
          y: 26.5,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
          },
        },
        23.3,
        18.3,
        13.9,
        9.6,
      ],
    },
    {
      name: 'London',
      marker: {
        symbol: 'diamond',
      },
      data: [
        {
          y: 3.9,
          marker: {
            symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)',
          },
        },
        4.2,
        5.7,
        8.5,
        11.9,
        15.2,
        17.0,
        16.6,
        14.2,
        10.3,
        6.6,
        4.8,
      ],
    },
  ],
};
