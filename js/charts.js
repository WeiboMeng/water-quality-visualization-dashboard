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
            window.addEventListener("resize", function () {
                Object.values(chartInstances).forEach(chart => {
                    chart.resize();
                });
            });
        }
