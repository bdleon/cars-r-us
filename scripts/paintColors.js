import { getPaintColors } from "./database.js";

const paintColors = getPaintColors();
document.addEventListener(
    "click",
    (clickEvent)=>{
        if(clickEvent.target.name === "paint"){
            window.alert(`The user choose option :${clickEvent.target.value}`)
        }
    }
)

export const PaintColors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = paintColors.map(paintColor => {
        return `<li>
            <input type="radio" name="paint" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

