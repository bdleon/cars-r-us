import { getCustomCarOrders, getInteriorSeats, getTechnology, getPaintColors, getWheels, } from "./database.js"

const interiorSeats = getInteriorSeats()
const technology = getTechnology()
const paintColors = getPaintColors()
const wheels = getWheels()



const buildOrderListItem = (order) => {

    const foundInterior = interiorSeats.find(
        (interiorSeat) => {
            return interiorSeat.id === order.interiorSeatId
        }
    )
    const foundTechnology = technology.find(
        (tech) => {
            return tech.id === order.technologyId
        }
    )
    const foundPaintColors = paintColors.find(
        (paintColor) => {
            return paintColor.id === order.paintColorId
        }
    )
    const foundWheels = wheels.find(
        (wheel) =>{
            return wheel.id === order.wheelId
        }

    )
    const totalCost = foundInterior.price + foundTechnology.price + foundPaintColors.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })


    return `<li>
        Order #${order.id} cost ${costString} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomCarOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
