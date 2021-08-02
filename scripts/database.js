const database ={
    paintColors: [
        {id: 1, color: "Silver", price: 200},
        {id: 2, color: "Midnight Blue", price: 100},
        {id: 3, color: "Firebrick Red", price: 600},
        {id: 4, color: "Spring Green", price: 500}
    ],
    wheels: [
        {id:1, wheel:"17-inch Pair Radial",price: 600},
        {id:2, wheel:"17-inch Pair Radial Black",price: 800},
        {id:3, wheel:"18-inch Pair Spoke Silver",price: 1000},
        {id:4, wheel:"18-inch Pair Spoke Black",price: 1000},
    ],
    interiorSeats: [
        {id: 1, interior: "Beige Fabric", price: 300},
        {id: 2, interior: "Charcoal Fabric", price: 400},
        {id: 3, interior: "White Leather", price: 600},
        {id: 4, interior: "Black Leather", price: 700},
    ],
    technology: [
        {id:1, tech:"Basic Package (basic sound system)", price: 600},
        {id:2, tech:"Navigation Package (includes integrated navigation controls)", price: 800},
        {id:3, tech:"Visibility Package (includes side and rear cameras)", price: 1000},
        {id:4, tech:"Ultra Package (includes navigation and visibility packages)", price: 1500},
    ],
    customCarOrders: [
        {id: 1, paintColorId:1,wheelId:1,interiorSeatId:1,technologyId:1, timestamp: 1614659931693}
    ],
    orderBuilder: {

    }
    


}

export const getPaintColors = () => {
    return database.paintColors.map(paintColor => ({ ...paintColor }))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}

export const getTechnology = () => {
    return database.technology.map(tech => ({ ...tech }))
}

export const getInteriorSeats = () => {
    return database.interiorSeats.map(interiorSeat => ({ ...interiorSeat }))
}
export const getCustomCarOrders = () => {
    return database.customCarOrders.map(customCarOrder => ({ ...customCarOrder }))
}

export const setPaintColors = (id) => {
    database.orderBuilder.paintColorId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setInteriorSeats = (id) => {
    database.orderBuilder.interiorSeatId = id
}

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder }

    // Add a new primary key to the object
    const lastIndex = database.customCarOrders.length - 1
    newOrder.id = database.customCarOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customCarOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}