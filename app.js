new Vue({
  el: "#app",
  data: {
    map: null,
    tileLayer: null,
    layers: []
  },
  mounted() {
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap() {
      this.map = L.map("map").setView([-12.1417175, -76.9886964], 12);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers() {}
  }
});
