
import { InteriorSeats } from "./interiorSeats.js"
import { PaintColors } from "./paintColors.js"
import { Technology } from "./technology.js"
import { Wheels } from "./wheels.js"














export const carRUs = () => {
    return `
        <h1>CAR-R-US</h1>

        <article class="choices">
            <section class="choices__paintColors options">
                <h2>Car Paint</h2>
                ${PaintColors()}
               
            </section>
            <section class="choices__seats options">
                <h2>Interior Seats</h2>
                ${InteriorSeats()}
               
            </section>
            <section class="choices__tech options">
                <h2>Technology</h2>
                ${Technology()}
              
            </section>
            <section class="choices__wheel options">
                <h2>Wheels</h2>
                ${Wheels()}
              
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
            
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            
            
            
        </article>
    `
}