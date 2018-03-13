// import Highcharts from "highcharts";

// import Exporting from "highcharts/modules/exporting";

// Exporting(Highcharts);

import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import VariablePie from "highcharts/modules/variable-pie";
import OfflineExporting from "highcharts/modules/offline-exporting";
import ExportData from "highcharts/modules/export-data";
import axios from "axios";

Exporting(Highcharts);
VariablePie(Highcharts);
OfflineExporting(Highcharts);
ExportData(Highcharts);

(function () {

  Highcharts.theme = {
    colors: [
      "#d96c6c",
      "#4d6647",
      "#e68200",
      "#f2cb30",
      "#993d79",
      "#ff5959",
      "#534d8c",
      "#7a4ba6",
      "#b0bf4d",
      "#b3b3b3",
      "#e68200"
    ],

    tooltip: {
      backgroundColor: {
        linearGradient: {
          x1: .5,
          y1: 0,
          x2: .5,
          y2: 1
        },
        stops: [
          [
            0,
            'rgba(246, 246, 246, 0.99)'
          ],
          [
            1,
            '#ffffff'
          ]
        ]
      },
      style: {
        color: 'rgba(0, 0, 0, 0.55)'
      }
    }
  };

  // Apply the theme
  Highcharts.setOptions(Highcharts.theme);

  let $chartsComponents = $(".chart-component");

  $chartsComponents.each(function (index) {
    let $component = $(this);
    let $chartObject = $component.find(".chart-object");
    let title = $component.find(".chart-title").text();
    let subTitle = $component.find(".chart-sub-title").text();
    let url = $component.data("chart-url");
    let fileName = title;
    let filter = {};

    if (url === undefined)
    {
      return;
    }

    function prepareChartData(data)
    {
      // data.tooltip.positioner = function (width, height, point) {
      //   let x = point.plotX + chart.plotLeft - width / 2;
      //   let y = point.plotY + chart.plotTop - height - 20;
      //
      //   if (x > chart.chartWidth - width - 20)
      //   {
      //     x = chart.chartWidth - width - 20
      //   }
      //
      //   if (point.plotX - 30 <= 0) {
      //     x = chart.plotLeft;
      //   }
      //
      //   if (y < height) {
      //     y = height;
      //   }
      //
      //   return {
      //     x: x,
      //     y: y
      //   }
      // };

      // console.log(data);

      return data;
    }

    function hidePopovers()
    {
      $chartObject.find('[data-toggle="popover"]').popover('hide')
    }

    function initPopovers()
    {
      $chartObject.find('[data-toggle="popover"]').popover({
        container: 'body',
        placement: 'top',
        trigger: 'focus',
        html: true
      });
    }

    if (title.length > 0 && subTitle.length > 0)
    {
      fileName += " - " + subTitle;
    }

    axios.get(url).then(function (res, req) {

      let chart = null;

      if (typeof res.data === "string")
      {
        $chartObject.html(res.data);
        initPopovers();
      }
      else
      {
        chart = Highcharts.chart($chartObject.get(0), prepareChartData(res.data));
      }

      $component.find("[data-filter]").each(function () {
        let $filter = $(this);

        $filter.on("click", function () {
          let params = $filter.data("parameters");
          let filterType = $filter.data("filter");

          filter[filterType] = {};

          if (params !== undefined)
          {
            params.split(/\s*,\s*/).forEach(function (param) {
              let value = $filter.data(param);

              if (value !== undefined)
              {
                filter[filterType][param] = value;
              }
            });
          }

          axios.post(url, {
            params: {
              filter: filter
            }
          }).then(function (res, req) {
            if (typeof res.data === "string")
            {
              $chartObject.html(res.data);
              initPopovers();
            }
            else
            {
              chart = Highcharts.chart($chartObject.get(0), res.data);
            }
          });
        });
      });

      $component.find(`[data-download]`).on("click", function () {
        let url = $(this).data("download");

        switch (url)
        {
          case "png":
            chart.exportChart({
              type: 'image/png',
              filename: fileName + ".png"
            });
            break;
          case "jpeg":
            chart.exportChart({
              type: 'image/jpeg',
              filename: fileName + ".jpg"
            });
            break;
          case "svg":
            chart.exportChart({
              type: 'image/svg+xml',
              filename: fileName + ".svg"
            });
            break;
          case "pdf":
            chart.exportChart({
              type: 'application/pdf',
              filename: fileName + ".pdf"
            });
            break;
          case "csv":
          {
            let csvData = new Blob([chart.getCSV()], {type: 'text/csv;charset=utf-8;'});

            if (navigator.msSaveBlob)
            {
              navigator.msSaveBlob(csvData, fileName + ".csv");
            }
            else
            {
              let link = document.createElement('a');
              link.href = window.URL.createObjectURL(csvData);
              link.setAttribute('download', fileName + ".csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }

            break;
          }
          default:
          {
            window.open(url, "_blank");
          }
        }
      });

      window.chart = chart;
    });
  });

})();