import { getInteriorSeats } from "./database.js";

const interiorSeats = getInteriorSeats();


export const InteriorSeats = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiorSeats.map(interiorsSeat => {
        return `<li>
            <input type="radio" name="size" value="${interiorsSeat.id}" /> ${interiorsSeat.interior}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


