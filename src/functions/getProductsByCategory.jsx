import {products} from "../data/data.js"

const getProductsByCategory = (category) => {

    if(!category){
        return products;
    }

    return products.filter(product => product.category === category)

}

export default getProductsByCategory;