
const surveyData = [
  { method: "Video", location: "Rumah", hours: 3.0, focus: "online" },
  { method: "Membaca", location: "Rumah", hours: 2.5, focus: "online" },
  { method: "Diskusi", location: "Kampus", hours: 3.5, focus: "online" },
  { method: "Latihan soal", location: "Rumah", hours: 2.0, focus: "online" },
  { method: "Video", location: "Kafe", hours: 4.0, focus: "online" },
  { method: "Membaca", location: "Perpustakaan", hours: 1.5, focus: "online" },
  { method: "Video", location: "Rumah", hours: 4.5, focus: "online" },
  { method: "Diskusi", location: "Kampus", hours: 2.5, focus: "online" },
  { method: "Latihan soal", location: "Kafe", hours: 3.0, focus: "online" },
  { method: "Video", location: "Kampus", hours: 3.0, focus: "online" },
  { method: "Membaca", location: "Rumah", hours: 2.0, focus: "online" },
  { method: "Diskusi", location: "Rumah", hours: 3.5, focus: "online" },

  { method: "Membaca", location: "Perpustakaan", hours: 2.0, focus: "offline" },
  { method: "Diskusi", location: "Kampus", hours: 3.5, focus: "offline" },
  { method: "Membaca", location: "Rumah", hours: 1.5, focus: "offline" },
  { method: "Latihan soal", location: "Kampus", hours: 2.5, focus: "offline" },
  { method: "Video", location: "Rumah", hours: 3.0, focus: "offline" },
  { method: "Diskusi", location: "Kampus", hours: 2.0, focus: "offline" },
  { method: "Latihan soal", location: "Rumah", hours: 2.0, focus: "offline" },
  { method: "Membaca", location: "Perpustakaan", hours: 3.0, focus: "offline" },
  { method: "Diskusi", location: "Kafe", hours: 2.5, focus: "offline" },
  { method: "Latihan soal", location: "Kampus", hours: 2.0, focus: "offline" },
  { method: "Membaca", location: "Rumah", hours: 2.5, focus: "offline" },
  { method: "Diskusi", location: "Kampus", hours: 3.0, focus: "offline" },
  { method: "Latihan soal", location: "Kafe", hours: 3.5, focus: "offline" },
  { method: "Video", location: "Kampus", hours: 2.5, focus: "offline" },
  { method: "Membaca", location: "Perpustakaan", hours: 3.0, focus: "offline" },
  { method: "Diskusi", location: "Rumah", hours: 2.0, focus: "offline" },
  { method: "Latihan soal", location: "Rumah", hours: 1.0, focus: "offline" },
  { method: "Video", location: "Rumah", hours: 3.5, focus: "offline" }
];


const colors = ["#3659d9", "#19a7a1", "#f59e0b", "#8b5cf6", "#ef6b6b"];
let methodChart, locationChart, durationChart;

function countBy(items, key) {
  return items.reduce((result, item) => {
    result[item[key]] = (result[item[key]] || 0) + 1;
    return result;
  }, {});
}

function makeChart(canvasId, type, labels, values, label) {
  return new Chart(document.getElementById(canvasId), {
    type,
    data: {
      labels,
      datasets: [{
        label,
        data: values,
        backgroundColor: colors,
        borderColor: type === "line" ? colors[0] : "#ffffff",
        borderWidth: type === "line" ? 3 : 2,
        borderRadius: type === "bar" ? 7 : 0,
        tension: 0.3,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: type === "pie", position: "bottom", labels: { usePointStyle: true, padding: 18 } },
        tooltip: { enabled: true }
      },
      scales: type === "pie" ? {} : {
        y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#edf0f6" } },
        x: { grid: { display: false } }
      }
    }
  });
}

function updateDashboard() {
  const focus = document.getElementById("topicFilter").value;
  const filtered = focus === "all" ? surveyData : surveyData.filter(item => item.focus === focus);
  const methodCounts = countBy(filtered, "method");
  const locationCounts = countBy(filtered, "location");
  const methodLabels = Object.keys(methodCounts);
  const locationLabels = Object.keys(locationCounts);
  const average = filtered.length
    ? filtered.reduce((sum, item) => sum + item.hours, 0) / filtered.length
    : 0;
  const favorite = methodLabels.sort((a, b) => methodCounts[b] - methodCounts[a])[0] || "-";

  document.getElementById("respondentCount").textContent = filtered.length;
  document.getElementById("avgHours").textContent = average.toFixed(1);
  document.getElementById("favoriteMethod").textContent = favorite;
  document.getElementById("insightText").textContent = filtered.length
    ? `Pada tampilan ini, metode “${favorite}” paling banyak dipilih. Rata-rata durasi belajar adalah ${average.toFixed(1)} jam per hari. Data yang digunakan masih berupa simulasi.`
    : "Tidak ada data untuk filter ini.";

  if (methodChart) methodChart.destroy();
  if (locationChart) locationChart.destroy();
  if (durationChart) durationChart.destroy();

  methodChart = makeChart("methodChart", "bar", methodLabels, methodLabels.map(key => methodCounts[key]), "Jumlah responden");
  locationChart = makeChart("locationChart", "pie", locationLabels, locationLabels.map(key => locationCounts[key]), "Lokasi belajar");

  const durationGroups = { "Kurang dari 2 jam": 0, "2–3 jam": 0, "Lebih dari 3 jam": 0 };
  filtered.forEach(item => {
    if (item.hours < 2) durationGroups["Kurang dari 2 jam"]++;
    else if (item.hours <= 3) durationGroups["2–3 jam"]++;
    else durationGroups["Lebih dari 3 jam"]++;
  });
  durationChart = makeChart("durationChart", "bar", Object.keys(durationGroups), Object.values(durationGroups), "Jumlah responden");
}

document.getElementById("topicFilter").addEventListener("change", updateDashboard);
updateDashboard();
