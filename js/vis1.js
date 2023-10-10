let vg_1 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Renewable Energy Share per country",
    "width": 600,
    "height": 300,
    "projection": {
      "type": "equalEarth"
    },
    "data": {
      "url": "https://raw.githubusercontent.com/BeianAnnieMao31494153/FIT3179/main/js/ne_110m.json",
      "format": {
        "type": "topojson",
        "feature": "ne_110m_admin_0_countries"
      }
    },
    "transform": [
      {
        "lookup": "properties.NAME",
        "from": {
          "data": {
            "url": "https://raw.githubusercontent.com/BeianAnnieMao31494153/FIT3179/main/data/global-data-on-sustainable-energy-2019.csv"
          },
          "key": "Entity",
          "fields": [
            "Renewable energy share in the total final energy consumption (%)"
          ]
        }
      }
    ],
    "mark": {
      "type": "geoshape"
    },
    "encoding": {
      "color": {
        "field": "Renewable energy share in the total final energy consumption (%)",
        "title": "Renewable Energy Share (%)",
        "type": "quantitative",
        "scale": {
          "type": "threshold",
          "domain": [20, 40, 60, 80],
          "range": ["#e6f6b9", "#aedfb6", "#68c4be", "#2165ab", "#1d3185"] }
      },
      "tooltip": [
        {
          "field": "properties.NAME",
          "type": "nominal",
          "title": "Entity"
        },
        {
          "field": "Renewable energy share in the total final energy consumption (%)",
          "type": "quantitative",
          "title": "Renewable energy share (%)"
        }
      ]
    }
  }

vegaEmbed("#map_chart", vg_1).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);