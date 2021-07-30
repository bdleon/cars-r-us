import { getWheels } from "./database.js";

const wheels = getWheels();

document.addEventListener(
    "click",
    (clickEvent)=>{
        if(clickEvent.target.name === "wheel"){
            window.alert(`The user choose option :${clickEvent.target.value}`)
        }
    }
)

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

