// Build the Pie charts chart
var totalPieChart = null;
function getPieChartData(country) {
  let firstDay = covidDataset[country].findIndex(e => e.confirmed > 0);
  let dates = covidDataset[country].map(e => e.date).splice(firstDay);
  let totalCases = covidDataset[country].find(
    e => e.date == dates[dates.length - 1]
  );
  return {
    days: dates.length,
    total: totalCases.confirmed,
    data: [
      {
        name: "Active",
        y: totalCases.confirmed - (totalCases.recovered + totalCases.deaths)
      },
      { name: "Recovered", y: totalCases.recovered },
      { name: "Death", y: totalCases.deaths }
    ]
  };
}
function createOrUpdateTotalPieChart(country) {
  let chartData = getPieChartData(country);
  if (totalPieChart) totalPieChart.destroy();
  totalPieChart = Highcharts.chart("totalPiechart", {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      margin: [50, 0, 0, 0],

      plotShadow: false,
      type: "pie"
    },
    title: {
      align: "center",
      text: `Total :${chartData.total} <br/> ${chartData.days} days reported`,
      style: {
        fontWeight: "bold"
      }
    },
    // subTitle: {
    //   text: `${chartData.days} days since first infection`
    // },
    //   tooltip: {
    //     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
    //   },
    //   accessibility: {
    //     point: {
    //       valueSuffix: "%"
    //     }
    //   },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.value} {point.percentage:.1f} %",
          connectorColor: "silver"
        }
      }
    },
    series: [
      {
        name: "Cases",
        data: chartData.data
      }
    ]
  });
}

// totalPieChart.series[0].update(
//   {
//     name: "Cases",
//     data: [
//       {
//         name: "Chrome",
//         y: 61.41
//       },
//       {
//         name: "Internet Explorer",
//         y: 11.84
//       },
//       {
//         name: "Firefox",
//         y: 10.85
//       },
//       {
//         name: "Edge",
//         y: 4.67
//       },
//       {
//         name: "Safari",
//         y: 4.18
//       },
//       {
//         name: "Other",
//         y: 7.05
//       }
//     ]
//   },
//   true
// );
// var todayPieChart = Highcharts.chart("todayPiechart", {
//   chart: {
//     plotBackgroundColor: null,
//     plotBorderWidth: null,
//     margin: 0,

//     plotShadow: false,
//     type: "pie"
//   },
//   title: {
//     align: "right",
//     text: "14-4-2020",
//     style: {
//       fontWeight: "bold"
//     }
//   },
//   tooltip: {
//     pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
//   },
//   accessibility: {
//     point: {
//       valueSuffix: "%"
//     }
//   },
//   plotOptions: {
//     pie: {
//       allowPointSelect: true,
//       cursor: "pointer",
//       dataLabels: {
//         enabled: true,
//         format: "<b>{point.name}</b>: {point.percentage:.1f} %",
//         connectorColor: "silver"
//       }
//     }
//   },
//   series: [{}]
// });
/*                           The  Three charts                            */
var confirmedChart = null;
var recoverdChart = null;
var deathChart = null;
/************************************************************************* */

["mousemove", "touchmove", "touchstart"].forEach(function(eventType) {
  document
    .getElementById("country-chart")
    .addEventListener(eventType, function(e) {
      var chart, point, i, event;
      let countrieAreaCharts = [confirmedChart, recoverdChart, deathChart];
      for (i = 0; i < countrieAreaCharts.length; i = i + 1) {
        chart = countrieAreaCharts[i];
        if (chart) {
          // Find coordinates within the chart
          event = chart.pointer.normalize(e);
          // Get the hovered point
          point = chart.series[0].searchPoint(event, true);

          if (point) {
            point.highlight(e);
          }
        }
      }
    });
});

/**
 * Override the reset function, we don't need to hide the tooltips and
 * crosshairs.
 */
Highcharts.Pointer.prototype.reset = function() {
  return undefined;
};

/**
 * Highlight a point by showing tooltip, setting hover state and draw crosshair
 */
Highcharts.Point.prototype.highlight = function(event) {
  event = this.series.chart.pointer.normalize(event);
  this.onMouseOver(); // Show the hover marker
  this.series.chart.tooltip.refresh(this); // Show the tooltip
  this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
};

/**
 * Synchronize zooming through the setExtremes event handler.
 */
function syncExtremes(e) {
  var thisChart = this.chart;

  if (e.trigger !== "syncExtremes") {
    // Prevent feedback loop
    Highcharts.each(Highcharts.charts, function(chart) {
      if (chart !== thisChart) {
        if (chart.xAxis[0].setExtremes) {
          // It is null while updating
          chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
            trigger: "syncExtremes"
          });
        }
      }
    });
  }
}

function getValueByDate(country, date, datakey) {
  return covidDataset[country].find(e => e.date == date)[datakey];
}
function getLineChartData(datakey, country) {
  let dates = covidDataset[Object.keys(covidDataset)[0]].map(e => e.date);
  let chartData = [];
  let dayOneInserted = false;
  dates.forEach((item, index) => {
    if (!dayOneInserted) {
      //insert only data starting day 1
      let confirmedCount = getValueByDate(country, item, "confirmed");
      if (confirmedCount > 0) {
        chartData.push([item, getValueByDate(country, item, datakey)]);
        dayOneInserted = true;
      }
    }
    //from the second day calculate day-by-day
    else {
      let theDayBefore = getValueByDate(country, dates[index - 1], datakey);
      let thisDay = getValueByDate(country, item, datakey);
      chartData.push([item, thisDay - theDayBefore]);
    }
  });

  return chartData;
}

var chartColors = {
  confirmed: Highcharts.getOptions().colors[0],
  recovered: Highcharts.getOptions().colors[1],
  deaths: Highcharts.getOptions().colors[2]
};

function createOrUpdateLineChart(dataKey, name, country, chartObj) {
  //initially add global data
  let dates = covidDataset[Object.keys(covidDataset)[0]].map(e => e.date);

  var dataset = {
    name: name,
    data: getLineChartData(dataKey, country),
    type: "area"
  };
  console.log(dataset);
  var chartDiv = document.getElementById(dataKey + "-area-chart");
  //   chartDiv.className = "chart";
  //   document.getElementById("country-chart").appendChild(chartDiv);

  if (chartObj) chartObj.destroy();

  return Highcharts.chart(chartDiv, {
    chart: {
      marginLeft: 40, // Keep all charts left aligned
      spacingTop: 20,
      spacingBottom: 20
    },
    title: {
      text: dataset.name,
      align: "left",
      margin: 0,
      x: 30
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    xAxis: {
      allowDecimals: false,
      //categories: true,
      //type: "category",
      crosshair: true,
      /*events: {
        setExtremes: syncExtremes
      },*/
      labels: {
        enabled: true,
        formatter: function() {
          return dataset.data[this.value][0];
        }
      }
    },
    yAxis: {
      title: {
        text: null
      }
    },
    tooltip: {
      positioner: function() {
        return {
          // right aligned
          x: this.chart.chartWidth - this.label.width,
          y: 10 // align to title
        };
      },
      formatter: function() {
        return `<b>[${dates[this.x]}]</b> : ${this.y}`;
      },
      borderWidth: 0,
      backgroundColor: "none",
      pointFormat: "{point.y}",
      headerFormat: "",
      shadow: false,
      style: {
        fontSize: "18px"
      }
      //valueDecimals: dataset.valueDecimals
    },
    series: [
      {
        marker: {
          enabled: false
        },
        data: dataset.data,
        name: dataset.name,
        type: dataset.type,
        color: chartColors[dataKey]
        //fillOpacity: 0.3,
        //tooltip: {
        //  valueSuffix: " " + dataset.unit
        //}
      }
    ]
  });
}

function updateChart(chart, dataKey, name, country) {
  return createOrUpdateLineChart(dataKey, name, country, chart);
}
