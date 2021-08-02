import { getInteriorSeats,setInteriorSeats } from "./database.js";

const interiorSeats = getInteriorSeats();


document.addEventListener(
    "change",
    (changedEvent)=>{
        if(changedEvent.target.name === "seat"){
            setInteriorSeats(parseInt(changedEvent.target.value))
        }
    }
)

export const InteriorSeats = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = interiorSeats.map(interiorsSeat => {
        return `<li>
            <input type="radio" name="seat" value="${interiorsSeat.id}" /> ${interiorsSeat.interior}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}


