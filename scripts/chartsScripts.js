// Build the Pie charts chart
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
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
      text: `Total confirmed cases : ${numberWithCommas(chartData.total)}`, // <br/> ${chartData.days} days reported`,
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
/*                         The  Three charts                            */
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

  let chartData = getLineChartData(dataKey, country);
  var dataset = {
    name: name,
    data: chartData,
    type: "area"
  };
  let dates = chartData.map(e => e[0]);
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
        return `<b>[${dates[this.x]}]</b> : ${numberWithCommas(this.y)}`;
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
          enabled: !mobileAndTabletCheck() //true //isMobile ()
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
