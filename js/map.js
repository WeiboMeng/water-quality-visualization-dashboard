const chart = echarts.init(document.getElementById('mapContainer'));

fetch('assets/china.json')
  .then(response => {
      if (!response.ok) {
          throw new Error("Failed to load china.json");
      }
      return response.json();
  })
  .then(geoJson => {
      echarts.registerMap('china', geoJson);
      updateMap();
  })
  .catch(error => {
      console.error(error);
  
      document.getElementById("mapContainer").innerHTML =
          "<p style='text-align:center;padding-top:100px;'>Failed to load map data. Please refresh the page.</p>";
  });

function updateMap() {
  const quarter = document.getElementById("timeRange").value;
  const data = provinceRankingData[quarter] || [];

  const min = Math.min(...data.map(d => d.value));
  const max = Math.max(...data.map(d => d.value));

  const option = {
    title: {
      text: `${quarter} China's provincial water quality ranking map`,
      left: 'center',
      top: '20px'
    },
    tooltip: {
      trigger: 'item',
      formatter: params => `${params.name}<br/>Ranking: ${params.value ?? 'No data'}`
    },
    visualMap: {
      min: min,
      max: max,
      left: 'left',
      bottom: 10,
      text: ['Better', 'Worse'],
      inRange: {
        color: ['red', 'white', 'blue']
      },
      calculable: true
    },
    series: [{
      type: 'map',
      map: 'china',
      roam: 'move',
      label: { 
        show: true,
        formatter: function (params) {
          return englishNames[params.name] || params.name;
        }
      },
      data: data,
      zoom: currentZoom
    }],
  };

  chart.setOption(option);
  updateRankingList(data);
  updateCharts();
}

function zoomIn() {
  currentZoom *= 1.2;
  updateMap();
}

function zoomOut() {
  currentZoom /= 1.2;
  updateMap();
}

window.addEventListener("resize", () => {
  chart.resize();
});
