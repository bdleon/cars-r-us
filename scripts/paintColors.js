import { getPaintColors } from "./database.js";

const paintColors = getPaintColors();


export const PaintColors = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = paintColors.map(paintColor => {
        return `<li>
            <input type="radio" name="size" value="${paintColor.id}" /> ${paintColor.color}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

