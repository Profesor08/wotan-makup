import Highcharts from "highcharts";

export default {

  "demo-0": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: Array(17).fill(0).map((val, id) => 2000 + id),
        crosshair: true
      }
    ],
    yAxis: [
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      // enabled: false,
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 0,
        data: (function() {
          return Array(17).fill(0).map(() => Math.floor(Math.random() * 70))
        })(),
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
    ],
    credits: {
      enabled: false
    }
  },

  "demo-1": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

  "demo-2": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

  "demo-3": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

  "demo-4": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

  "demo-5": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

  "demo-6": {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    subtitle: {
      text: null
    },
    xAxis: [
      {
        categories: [
          2000,
          2001,
          2002,
          2003,
          2004,
          2005,
          2006,
          2007,
          2008,
          2009,
          2010,
          2011,
          2012,
          2013,
          2014,
          2015,
          2016,
        ],
        crosshair: true
      }
    ],
    yAxis: [
      { // Primary yAxis
        labels: {
          format: '{value}°C',
          style: {
            color: "#90ed7d"
          }
        },
        title: {
          text: 'Temperature',
          style: {
            color: "#90ed7d"
          }
        },
        visible: false

      },
      { // Secondary yAxis
        gridLineWidth: 1,
        title: {
          text: null,
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "rgba(0, 0, 0, 0.55)"
          }
        }

      },
      { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: 'Название',
          style: {
            color: "#434348"
          }
        },
        labels: {
          format: '{value}%',
          style: {
            color: "#434348"
          }
        },
        opposite: true,
        visible: false
      }
    ],
    tooltip: {
      shared: true,
      borderWidth: 0,
      borderRadius: 6,
      style: {
        color: "rgba(0, 0, 0, 0.55)"
      },
      positioner: function (width, height, point) {
        let x = point.plotX + chart.plotLeft - width / 2;
        let y = point.plotY + chart.plotTop - height - 20;

        if (x > chart.chartWidth - width - 20)
        {
          x = chart.chartWidth - width - 20
        }

        if (point.plotX - 30 <= 0) {
          x = chart.plotLeft;
        }

        if (y < height) {
          y = height;
        }

        return {
          x: x,
          y: y
        }
      }
    },
    legend: {
      enabled: false,
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [
      {
        name: 'Название',
        type: 'column',
        yAxis: 1,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],
        tooltip: {
          valueSuffix: ' тыс. тонн'
        },
        color: "#de7171",
        states: {
          hover: {
            color: "#a34141"
          }
        }
      },
      {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [
          49.9,
          71.5,
          106.4,
          129.2,
          144.0,
          176.0,
          135.6,
          148.5,
          216.4,
          194.1,
          95.6,
          54.4,
          106.4,
          129.2,
          148.5,
          176.0,
          148.5,
        ],

        marker: {
          enabled: false
        },
        dashStyle: 'solid',
        tooltip: {
          valueSuffix: ' mb'
        },

        color: "#f2cb30"
      }
    ],
    credits: {
      enabled: false
    }
  },

}