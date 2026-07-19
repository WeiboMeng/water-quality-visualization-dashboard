const chart = echarts.init(document.getElementById('mapContainer'));

fetch('https://geo.datav.aliyun.com/areas/bound/geojson?code=100000_full')
.then(res => res.json())
.then(geoJson => {
  echarts.registerMap('china', geoJson);
  updateMap();
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
      roam: false,
      label: { 
        show: true,
        formatter: function (params) {
          return englishNames[params.name] || params.name;
        }
      },
      data: data,
      zoom: currentZoom
    }],
    graphic: [
      {
        type: 'text',
        left: 'center',
        top: '88%',
        style: {
          text: 'Blue is the ranking of provinces with better water quality, red is the ranking of provinces with worse water quality. Provinces with white color are no longer in the ranking.',
          font: '14px sans-serif',
          fill: '#555',
          textAlign: 'center'
        }
      },
      {
        type: 'text',
        left: 'center',
        top: '92%',
        style: {
          text: 'The darker the color, the higher the ranking. That is, dark blue is the province with the least water pollution, and dark red is the province with the most serious water pollution.',
          font: '14px sans-serif',
          fill: '#555',
          textAlign: 'center'
        }
      }
    ]
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
