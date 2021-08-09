window.covidDataset = null;
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function setDDPosition() {
  let mapTop = $("#map").position().top;
  $("#countriesDDContainer").css("top", `${mapTop + 10} px`);
}
window.addEventListener(
  "orientationchange",
  function() {
    setDDPosition();
  },
  false
);

window.addEventListener(
  "resize",
  function() {
    setDDPosition();
  },
  false
);

Highcharts.theme = {
  colors: [
    "#2b908f",
    "#90ee7e",
    "#f45b5b",
    "#7798BF",
    "#aaeeee",
    "#ff0066",
    "#eeaaee",
    "#55BF3B",
    "#DF5353",
    "#7798BF",
    "#aaeeee"
  ],
  chart: {
    backgroundColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1
      },
      stops: [
        [0, "#2a2a2b"],
        [1, "#3e3e40"]
      ]
    },
    style: {
      fontFamily: "'Unica One', sans-serif"
    },
    plotBorderColor: "#606063"
  },
  title: {
    style: {
      color: "#E0E0E3",
      textTransform: "uppercase",
      fontSize: "16px"
    }
  },
  subtitle: {
    style: {
      color: "#E0E0E3"
      //textTransform: "uppercase"
    }
  },
  xAxis: {
    gridLineColor: "#707073",
    labels: {
      style: {
        color: "#E0E0E3"
      }
    },
    lineColor: "#707073",
    minorGridLineColor: "#505053",
    tickColor: "#707073",
    title: {
      style: {
        color: "#A0A0A3"
      }
    }
  },
  yAxis: {
    gridLineColor: "#707073",
    labels: {
      style: {
        color: "#E0E0E3"
      }
    },
    lineColor: "#707073",
    minorGridLineColor: "#505053",
    tickColor: "#707073",
    tickWidth: 1,
    title: {
      style: {
        color: "#A0A0A3"
      }
    }
  },
  tooltip: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    style: {
      color: "#F0F0F0"
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        color: "#F0F0F3",
        style: {
          fontSize: "13px"
        }
      },
      marker: {
        lineColor: "#333"
      }
    },
    boxplot: {
      fillColor: "#505053"
    },
    candlestick: {
      lineColor: "white"
    },
    errorbar: {
      color: "white"
    }
  },
  legend: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    itemStyle: {
      color: "#E0E0E3"
    },
    itemHoverStyle: {
      color: "#FFF"
    },
    itemHiddenStyle: {
      color: "#606063"
    },
    title: {
      style: {
        color: "#C0C0C0"
      }
    }
  },
  credits: {
    style: {
      color: "#666"
    }
  },
  labels: {
    style: {
      color: "#707073"
    }
  },
  drilldown: {
    activeAxisLabelStyle: {
      color: "#F0F0F3"
    },
    activeDataLabelStyle: {
      color: "#F0F0F3"
    }
  },
  navigation: {
    buttonOptions: {
      symbolStroke: "#DDDDDD",
      theme: {
        fill: "#505053"
      }
    }
  },
  // scroll charts
  rangeSelector: {
    buttonTheme: {
      fill: "#505053",
      stroke: "#000000",
      style: {
        color: "#CCC"
      },
      states: {
        hover: {
          fill: "#707073",
          stroke: "#000000",
          style: {
            color: "white"
          }
        },
        select: {
          fill: "#000003",
          stroke: "#000000",
          style: {
            color: "white"
          }
        }
      }
    },
    inputBoxBorderColor: "#505053",
    inputStyle: {
      backgroundColor: "#333",
      color: "silver"
    },
    labelStyle: {
      color: "silver"
    }
  },
  navigator: {
    handles: {
      backgroundColor: "#666",
      borderColor: "#AAA"
    },
    outlineColor: "#CCC",
    maskFill: "rgba(255,255,255,0.1)",
    series: {
      color: "#7798BF",
      lineColor: "#A6C7ED"
    },
    xAxis: {
      gridLineColor: "#505053"
    }
  },
  scrollbar: {
    barBackgroundColor: "#808083",
    barBorderColor: "#808083",
    buttonArrowColor: "#CCC",
    buttonBackgroundColor: "#606063",
    buttonBorderColor: "#606063",
    rifleColor: "#FFF",
    trackBackgroundColor: "#404043",
    trackBorderColor: "#404043"
  }
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

// Radialize the colors
Highcharts.setOptions({
  colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
    return {
      radialGradient: {
        cx: 0.5,
        cy: 0.3,
        r: 0.7
      },
      stops: [
        [0, color],
        [
          1,
          Highcharts.color(color)
            .brighten(-0.3)
            .get("rgb")
        ] // darken
      ]
    };
  })
});
function CSVtoArray(text) {
  return text
    .replace(/^"/, "")
    .replace(/",$/, "")
    .split(",");
}
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function jsonResp(response) {
  return response.json();
}

function csvResp(response) {
  return response.text();
}

Promise.all([
  fetch("./pop.csv")
    .then(checkStatus)
    .then(csvResp),
  fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(checkStatus)
    .then(jsonResp)
])
  .then(function(data) {
    // Log the data to the console
    // You would do something with both sets of data here
    let csv = data[0];
    let covidJSON = data[1];
    let covidCountries = Object.keys(covidJSON);

    //apply data fixes :
    let corruptedCountries = Object.keys(DataFixes);
    corruptedCountries.forEach(corrCountry => {
      let corruptedDates = Object.keys(DataFixes[corrCountry]);
      corruptedDates.forEach(corrDate => {
        let corruptedKeys = Object.keys(DataFixes[corrCountry][corrDate]);
        corruptedKeys.forEach(corrKey => {
          covidJSON[corrCountry].find(e => e.date == corrDate)[corrKey] =
            DataFixes[corrCountry][corrDate][corrKey];
        });
      });
    });

    let dates = covidJSON[Object.keys(covidJSON)[0]].map(e => e.date); //
    let caseStates = Object.keys(
      covidJSON[Object.keys(covidJSON)[0]][0]
    ).splice(1);
    covidJSON.global = [];

    setDDPosition();
    createCountriesDD(
      [{ id: "global", text: "WorldWide" }].concat(
        isoCountries.filter(e => covidCountries.includes(e.text))
      )
    );

    dates.forEach(dateReported => {
      let newDay = { date: dateReported };
      caseStates.forEach(state => {
        newDay[state] = covidCountries
          .map(e => covidJSON[e].find(x => x.date == dateReported))
          .map(e => e[state])
          .reduce((a, b) => a + b);
      });
      covidJSON.global.push(newDay);
    });
    covidDataset = covidJSON;
    createOrUpdateTotalPieChart("global");
    confirmedChart = createOrUpdateLineChart(
      "confirmed",
      "Confirmed",
      "global",
      confirmedChart
    );
    recoverdChart = createOrUpdateLineChart(
      "recovered",
      "Recovered",
      "global",
      recoverdChart
    );

    deathChart = createOrUpdateLineChart(
      "deaths",
      "Deaths",
      "global",
      deathChart
    );
    generateMap(csv, dates);
    $(".loader").fadeOut("slow");
  })
  .catch(function(error) {
    // if there's an error, log it
    console.log(error);
  });
var mapChart = null;
function generateMap(csv, dates) {
  csv = csv.split(/\n/);

  var countries = {},
    lastCommaRegex = /,\s$/,
    quoteRegex = /\"/g,
    categories = CSVtoArray(csv[1]).slice(2);

  // Parse the CSV into arrays, one array each country
  $.each(csv.slice(3), function(j, line) {
    var row = CSVtoArray(line),
      data = row.slice(1);

    $.each(data, function(i, val) {
      val = val.replace(quoteRegex, "");
      if (!isNaN(val)) {
        val = parseInt(val, 10);
      } else if (!val || lastCommaRegex.test(val)) {
        val = null;
      }
      data[i] = val;
    });

    countries[row[0]] = {
      //name: row[0],
      code3: row[0],
      data: data
    };
  });

  // For each country, use the latest value for current population
  var data = [];
  for (var code3 in countries) {
	  
    if (countries.hasOwnProperty(code3) && countries[code3]) {
      var value = null,
        year,
        itemData = countries[code3].data,
        i = itemData.length;

      while (i--) {
        if (typeof itemData[i] === "number") {
          value = itemData[i];
          year = categories[i];
          break;
        }
      }
      // if (["eg", "egy"].includes(code3.toLocaleLowerCase())) debugger;
      let countryObj = isoCountries.find(e => e.id == countryMapping[code3]);
      let covidCountryData = null;
      let latestCountryData = null;
      if (countryObj) {
        covidCountryData = covidDataset[countryObj.text];
        if (covidCountryData)
          latestCountryData = covidCountryData.find(
            e => e.date == dates[dates.length - 1]
          );
      }

      data.push({
        name: countryObj ? countryObj.text : code3,
        code3: code3,
        value: latestCountryData ? latestCountryData.confirmed : null,
        pop: value,
        recovered: latestCountryData ? latestCountryData.recovered : null,
        deaths: latestCountryData ? latestCountryData.deaths : null,
        year: year
      });
    }
  }

  // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
  var mapData = Highcharts.geojson(Highcharts.maps["custom/world"]);
  $.each(mapData, function() {
    this.id = this.properties["hc-key"]; // for Chart.get()
    this.flag = this.id.replace("UK", "GB").toLowerCase();
  });
debugger;
  // Initiate the map chart
  mapChart = Highcharts.mapChart("map", {
    legend: {
      align: "left",
      title: {
        text: "<b>Total confirmed cases</b>"
      }
    },
    title: { text: "" },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: "bottom"
      }
    },

    colorAxis: {
      type: "logarithmic",
      endOnTick: false,
      startOnTick: false,
      minColor: "#ffeda0",
      maxColor: "#f03b20",
      min: 100
    },

    tooltip: {
      formatter: function() {
        return `<b style="text-align:center">
        ${this.point.name}</b><br/><br/>
        <ul style="text-align:center">
        <li style="color:#3f51b5">Confirmed : ${numberWithCommas(
          this.point.value
        )}</li><br/>
        <li style="color:green">Recovered : ${numberWithCommas(
          this.point.recovered
        )}</li><br/>
        <li style="color:red">Deaths :  ${numberWithCommas(
          this.point.deaths
        )}</li><br/>
        </ul> <br/><br/>
        '<span style="font-size: 10px">(Click for details)</span>'`;
      }
      // footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
    },

    series: [
      {
        data: data.filter(e=>e.name&&e.value&&e.value>0),
        mapData: mapData,
        joinBy: ["iso-a3", "code3"],
        name: "Confirmed",
        allowPointSelect: false,
        point: {
          events: {
            click: function() {
              countriesDropDownSelectOption(countryMapping[this.code3]);
              selectCountry(countryMapping[this.code3]);
            }
          }
        },

        cursor: "pointer",
        states: {
          select: {
            color: {},
            borderColor: "blue",
            dashStyle: "solid"
          }
        }
      }
    ]
  });

  // Pre-select a country
  // mapChart.get("eg").select();
  // mapChart.get("eg").zoomTo();
  //mapChart.mapZoom(2);
}
//handle globl
function selectCountry(code2) {
  if (code2) {
    let countryName = "global";
    if (code2 == "global") {
      mapChart.zoom();
      if (mapChart.getSelectedPoints().length)
        mapChart.get(mapChart.getSelectedPoints()[0].id).select(false);
    } else {
      if (isoCountries.some(e => e.id == code2))
        countryName = isoCountries.find(e => e.id == code2).text;
      mapChart.get(code2.toLowerCase()).select();
      mapChart.get(code2.toLowerCase()).zoomTo();
      mapChart.mapZoom(2);
    }

    confirmedChart = updateChart(
      confirmedChart,
      "confirmed",
      "Confirmed",
      countryName
    );
    recoverdChart = updateChart(
      recoverdChart,
      "recovered",
      "Recovered",
      countryName
    );
    deathChart = updateChart(deathChart, "deaths", "Deaths", countryName);
    createOrUpdateTotalPieChart(countryName);
  }
}
