// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer
let mapboxUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
let accessToken = 'pk.eyJ1IjoicmluY2tkIiwiYSI6ImNpamc3ODR1aDAxMmx0c2x0Zm9lc3E1OTAifQ.pIkP7PdJMrR5TBIp93Dlbg';
let myLayer = L.tileLayer(mapboxUrl, { id: 'mapbox.streets-basic', maxZoom: 20, accessToken: accessToken });
myLayer.addTo(myMap);


// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-05-04&endtime=2018-05-10&maxradiuskm";


// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {
  console.log(earthquakeData);
  // console.log(earthquakeData[0]['properties']['mag']);
  // console.log(earthquakeData[0]['geometry']['coordinates'][1]);
  // console.log(earthquakeData[0]['geometry']['coordinates'][0]);

  // Our marker size function that will give each earthquake a different radius based on its magnitude

  var magna = '';
  var i;
  for (i = 0; i < earthquakeData.length; i++) {
    magna += earthquakeData[i]['properties']['mag'] + '<br>';
  }

  // console.log(magna)

  function markerSize(magna) {
    return magna * 12000;
  }

  // Import data from an external json file
  d3.json("./plates.geojson", function (error, jsonData) {
    if (error) throw error;
    L.geoJSON(jsonData, {
      style: {
        "color": "#1e306e",
        "fillOpacity": 0,
        "weight": 2,
        "opacity": 0.65
      }
    }).bindPopup(function (layer) {
      return "<h3>Plate Name:</h3>" + layer.feature.properties.PlateName;
    }).addTo(myMap);

    for (var i = 0; i < earthquakeData.length; i++) {
      L.circle([earthquakeData[i].geometry.coordinates[1], earthquakeData[i].geometry.coordinates[0]], {
        fillOpacity: 0.5,
        weight: 2,
        color: "red",
        fillColor: "yellow",
        // Setting our circle's radius equal to the output of our markerSize function
        // This will make our marker's size proportionate to its magnitude
        radius: markerSize(earthquakeData[i]['properties']['mag'])
      }).bindPopup("<h1>Location: " + earthquakeData[i]['properties']['place'] + "</h1> <hr> <h3>Magnitude: " + earthquakeData[i]['properties']['mag'] + "</h3>").addTo(myMap);
    }



  });



}




