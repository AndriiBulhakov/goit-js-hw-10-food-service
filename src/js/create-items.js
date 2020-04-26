import itemTemplate from '../templates/gallery-items.hbs'
import products from '../menu.json'

const markup = itemTemplate(products)
// console.log(markup)

export default markup