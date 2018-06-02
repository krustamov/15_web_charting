    // var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
    // // zoom the map to the polygon
    // map.fitBounds(polygon.getBounds());
    // // console.log([jsonData][0]['features'][0]['geometry']['coordinates'][0][1]);

    // console.log(jsonData)
// goodCodeStart
jsonData.features.forEach(function (feat) {
    var geom = feat.geometry;
    var props = feat.properties;
    if (geom.type === 'MultiPolygon') {
      for (var i = 0; i < geom.coordinates.length; i++) {

        var polygonData = geom.coordinates[i]

        console.log(JSON.stringify(polygonData).length);

        var latlngsData = JSON.stringify(polygonData);
        console.log(latlngsData);
// goodCodeEnd
        // test_beg

        // for (var i = 0; i < latlngsData.length; i++) {
        //   L.polygon([latlngsData[i]],
        //     {
        //       color: "red",
        //       fillColor: "yellow",
        //       fillOpacity: 0.75
        //   }).addTo(myMap);
        // }

        // test_end


        // test_beg

        // Create a triangle using the polygon method
        // L.polygon([
        //   [-180, -32.30415], [-180, -15.620711], [-179.739, -15.5422], [-179.444, -15.5268],
        //   [-178.812, -15.3773], [-178.264, -15.3255], [-177.691, -15.3981], [-177.13, -15.5594],
        //   [-177.248, -15.7096], [-177.384, -15.8066], [-177.493, -15.8989], [-177.575, -15.9611],
        //   [-177.634, -16.0236], [-177.664, -16.1065], [-177.678, -16.1769], [-177.513, -16.3196],
        //   [-177.364, -16.437], [-177.201, -16.5746], [-177.068, -16.7246], [-176.921, -16.8772],
        //   [-176.82, -17.0344], [-176.713, -17.2194], [-176.625, -17.3992], [-176.532, -17.574],
        //   [-176.462, -17.731], [-176.403, -17.8727], [-176.304, -18.0551], [-176.297, -18.1308],
        //   [-176.33, -18.2666], [-176.346, -18.3068], [-176.44, -18.4723], [-176.511, -18.6002],
        //   [-176.551, -18.6855], [-176.584, -18.7684], [-176.587, -18.8364], [-176.57, -18.9752],
        //   [-176.549, -19.2174], [-175.979, -19.3865], [-176.027, -19.6508], [-176.079, -19.8141],
        //   [-176.122, -19.8843], [-176.182, -20.1056], [-176.116, -20.1289], [-176.152, -20.2647],
        //   [-176.159, -20.4234], [-176.176, -20.4939], [-176.19, -20.655], [-176.237, -20.7958],
        //   [-176.264, -20.8913], [-176.289, -20.9995], [-176.322, -21.1126], [-176.372, -21.3012],
        //   [-176.405, -21.4874], [-176.449, -21.6005], [-176.52, -21.8115], [-176.601, -22.0074],
        //   [-176.635, -22.2314], [-176.691, -22.2864], [-176.709, -22.5005], [-176.748, -22.7345],
        //   [-176.913, -23.0481], [-177.102, -23.4144], [-177.25, -23.7079], [-177.419, -24.1051],
        //   [-177.448, -24.242], [-177.552, -24.7196], [-177.657, -25.1971], [-177.793, -25.9755],
        //   [-178.017, -26.7672], [-178.248, -27.3765], [-178.482, -27.9855], [-178.713, -28.6927],
        //   [-178.966, -29.4983], [-179.074, -29.7924], [-179.226, -30.3553], [-179.393, -30.9968],
        //   [-179.515, -31.3328], [-179.74, -31.751], [-180, -32.30415]],
        //   {
        //     color: "red",
        //     fillColor: "yellow",
        //     fillOpacity: 0.75
        //   }).addTo(myMap);


        // test_end


        // test_beg

        // create a red polygon from an array of LatLng points
        // var latlngs = latlngsData;
        // var polygon = L.polygon(latlngs, { color: 'red' }).addTo(myMap);
        // // zoom the map to the polygon
        // map.fitBounds(polygon.getBounds());

        // test_end



      }



    }
  });
