    const chart = echarts.init(document.getElementById('mapContainer'));
    let currentZoom = 1;
    let chartInstances = {};

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
          roam: true,
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

    function updateRankingList(data) {
      const goodListEl = document.getElementById('goodRankingList');
      const badListEl = document.getElementById('badRankingList');
      goodListEl.innerHTML = '';
      badListEl.innerHTML = '';

      const goodList = data.filter(d => d.value > 0).sort((a, b) => b.value - a.value);
      const badList = data.filter(d => d.value < 0).sort((a, b) => a.value - b.value);

      goodList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'ranking-item';
        div.textContent = englishNames[item.name] || item.name;
        goodListEl.appendChild(div);
      });

      badList.forEach(item => {
        const div = document.createElement('div');
        div.className = 'ranking-item';
        div.textContent = englishNames[item.name] || item.name;
        badListEl.appendChild(div);
      });
    }

    function zoomIn() {
      currentZoom *= 1.2;
      updateMap();
    }

    function zoomOut() {
      currentZoom /= 1.2;
      updateMap();
    }

      function createChart(id, type, labels, datasets, titleText) {
            let ctx = document.getElementById(id).getContext('2d');

            if (chartInstances[id]) {
                chartInstances[id].destroy();
            }

            let options = {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: titleText,
                        font: { size: 18 }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            };

            if (type === "bar" || type === "line") {
                options.scales = { y: { beginAtZero: true } };
            }

            if (id === "reservoirQualityChart") {
                options.scales.y.max = 100;
            }

            chartInstances[id] = new Chart(ctx, {
                type: type,
                data: { labels: labels, datasets: datasets },
                options: options
            });
        }

        function updateCharts() {
            let quarter = document.getElementById("timeRange").value;
            
            createChart("waterCategoryChart", "pie", 
                ["Class I-III(%)", "Class IV(%)", "Class V(%)", "Inferior Class V(%)"], 
                [{
                    label: "Water quality category distribution",
                    data: waterQualityData[quarter],
                    backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)']
                }], 
                "Proportion of surface water quality categories nationwide"
            );
        
            createChart("riverQualityChart", "line", 
                ["Zhejiang and Fujian rivers", "Yangtze River Basin", "Northwest Rivers", "Southwest Rivers", "Pearl River Basin", "Yellow River Basin", "Liaohe River Basin", "Huaihe River Basin", "Haihe River Basin", "Songhua River Basin"], 
                [
                    { label: "Class I-III(%)", data: riverQualityData[quarter].map(x => x[0]), borderColor: 'rgba(54, 162, 235, 1)' , backgroundColor: 'rgba(54, 162, 235, 0.5)' },
                    { label: "Inferior Class V(%)", data: riverQualityData[quarter].map(x => x[1]), borderColor: 'rgba(255, 99, 132, 1)' , backgroundColor: 'rgba(255, 99, 132, 0.5)', fill: false }
                ], 
                "Proportion of water quality categories in the seven major river basins and other rivers"
            );
            
            createChart("reservoirQualityChart", "bar", 
                ["Taihu Lake", "chaohu", "Dianchi Lake", "Erhai Lake", "Danjiangkou Reservoir", "Baiyangdian"], 
                [
                    { label: "This year(%)", data: reservoirQualityData[quarter].map(x => x[0]), backgroundColor: 'rgba(54, 162, 235, 0.5)' },
                    { label: "same period last year(%)", data: reservoirQualityData[quarter].map(x => x[1]), backgroundColor: 'rgba(153, 204, 51, 0.5)' }
                ], 
                "Nutritional status of 6 lakes (reservoirs)"
            );
        }
        
        
        document.addEventListener("DOMContentLoaded", updateCharts);
