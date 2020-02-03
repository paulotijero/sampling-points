new Vue({
  el: "#app",
  data: {
    map: null,
    tileLayer: null,
    layers: [
      {
        id: 0,
        name: "City/County Boundaries",
        active: true,
        features: [
          {
            id: 0,
            name: "City of St. Louis",
            type: "polygon",
            coords: [
              [38.770547, -90.168056],
              [38.753816, -90.177326],
              [38.74739, -90.183849],
              [38.731456, -90.206337],
              [38.719805, -90.212002],
              [38.706142, -90.210629],
              [38.692879, -90.202217],
              [38.68015, -90.189857],
              [38.665139, -90.182991],
              [38.646774, -90.179729],
              [38.630818, -90.179214],
              [38.615663, -90.183849],
              [38.601713, -90.190201],
              [38.587759, -90.20462],
              [38.577427, -90.219212],
              [38.56414, -90.232258],
              [38.545615, -90.248566],
              [38.53165, -90.257664],
              [38.538901, -90.270023],
              [38.548702, -90.273113],
              [38.561053, -90.294399],
              [38.574072, -90.309334],
              [38.596346, -90.32032],
              [38.614054, -90.314827],
              [38.632159, -90.304527],
              [38.651198, -90.302296],
              [38.664067, -90.293713],
              [38.683768, -90.278263],
              [38.70065, -90.265388],
              [38.717662, -90.253887],
              [38.722349, -90.238266],
              [38.729715, -90.221272],
              [38.742302, -90.203934],
              [38.754886, -90.191746],
              [38.764792, -90.184021],
              [38.77135, -90.183334]
            ]
          }
        ]
      }
    ]
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([38.63, -90.23], 12);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {
      this.layers.forEach(layer => {
        const polygonFeatures = layer.features.filter(
          feature => feature.type === "polygon"
        );

        polygonFeatures.forEach(feature => {
          feature.leafletObject = L.polygon(feature.coords).bindPopup(
            feature.name
          );
          feature.leafletObject.addTo(this.map);
        });
      });
    }
  }
});
