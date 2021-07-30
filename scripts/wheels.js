import { getWheels } from "./database.js";

const wheels = getWheels();


export const Wheels = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = wheels.map(wheel => {
        return `<li>
            <input type="radio" name="wheel" value="${wheel.id}" /> ${wheel.wheel}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

