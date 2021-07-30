import { getTechnology } from "./database.js";

const technology = getTechnology();

document.addEventListener(
    "click",
    (clickEvent)=>{
        if(clickEvent.target.name === "tech"){
            window.alert(`The user choose option :${clickEvent.target.value}`)
        }
    }
)

export const Technology = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = technology.map(tech => {
        return `<li>
            <input type="radio" name="tech" value="${tech.id}" /> ${tech.tech}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

