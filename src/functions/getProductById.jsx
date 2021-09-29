import {products} from "../data/data.js"

const getProductById = (id) => {
    return products.find(product => product.id === id)
}

export default getProductById;