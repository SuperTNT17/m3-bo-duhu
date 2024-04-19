
const on = document.getElementById("ButtonOn")
const off = document.getElementById("ButtonOff")
const img = document.getElementById("img")
const lampaan = document.getElementById("lampaanIf")
const lampuit = document.getElementById("lampuitIf")
const lampText = document.getElementById("lampText");






on.addEventListener("click", () => {
    img.src = "img/lampaan_kleiner.jpg";
    img.classList.remove("lampUit");
    lampText.innerHTML = "lamp is aan";
    lampaan.src = img.src
})



off.addEventListener("click", () => {
    img.src = "img/lampuit_kleiner.png";
    img.classList.add("lampUit");
    lampText.innerHTML = "lamp is uit";
    lampaan.src = img.src
})

const ctx = document.getElementById('verbruikChart');

let data = {
    labels: ["jan", "feb", "mar", "apr", "mei", "jun"],
    datasets: [{
        label: "Verbruik (KwH)",
        data: [30, 20, 25, 10, 35, 10],
        backgroundColor: ["#EEEEEE"],
        borderColor: "#000000",
        borderWidth: 1
    }]
}

let config = {
    type: "bar",
    data: data,
    options: {
        maintainAspectRatio: false,
        y: {
            max: 60
        }
    }
}

let myChart = new Chart(ctx, config)

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const weatherCtx = document.getElementById('weatherForecastChart').getContext('2d');
    const lamp = document.getElementById("lamp")
    const weatherForecastChart = new Chart(weatherCtx, {
        type: 'line',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            datasets: [{
                label: 'Temperature (°C)',
                data: [22, 24, 21, 25, 23, 26, 27],
                backgroundColor: "#EEEEEE",
                borderColor: "#FFFF00",
                borderWidth: 1,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['merk 1', 'merk 2'],
            datasets: [{
                label: '# kwh per jaar zonnepanelen',
                data: [300, 350],
                backgroundColor: [
                    '#FFFF00',
                    '#EEEEEE',
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0.8)',
                    'rgba(0, 0, 0, 0.8)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});