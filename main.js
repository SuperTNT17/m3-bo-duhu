
const on  = document.getElementById("ButtonOn") 
const off = document.getElementById("ButtonOff")
const img = document.getElementById("img")

// console.log(ond)

on.addEventListener("click", () => {
    img.src = "/img/lampaan.jpeg";
})

off.addEventListener("click", () => {
    img.src = "/img/lampuit.png";
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


