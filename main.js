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