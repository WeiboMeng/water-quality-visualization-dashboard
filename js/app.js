let currentZoom = 1;
let chartInstances = {};

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

document.addEventListener("DOMContentLoaded", updateCharts);
