import { getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {}
)

export const JewelryStyles = () => {
        let html = "<ul>"

        // Use .map() for converting objects to <li> elements
        const listItems = styles.map(style => {
            return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
        })

        // Join all of the strings in the array into a single string
        html += listItems.join("")

        html += "</ul>"
        return html
    }
    // export const DiamondSizes = () => {
    //     let html = "<ul>"

//     // Use .map() for converting objects to <li> elements
//     const listItems = sizes.map(size => {
//         return `<li>
//             <input type="radio" name="size" value="${size.id}" /> ${size.carets}
//         </li>`
//     })

//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }