import { getTechnology } from "./database.js";

const technology = getTechnology();


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

