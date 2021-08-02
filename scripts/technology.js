import { getTechnology, setTechnology } from "./database.js";

const technology = getTechnology();


document.addEventListener(
    "change",
    (changedEvent)=>{
        if(changedEvent.target.name === "tech"){
            setTechnology(parseInt(changedEvent.target.value))
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

