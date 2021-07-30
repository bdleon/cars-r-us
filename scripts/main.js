import { carRUs } from "./carsRUs.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carRUs()
}

renderAllHTML()