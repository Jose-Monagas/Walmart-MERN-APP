import sendRequest from "./send-request";
import Product from '../../models/product'

const BASE_URL = '/api/products'

export function getProducts(){
    return sendRequest(BASE_URL)
}

export function getProductById(productId){
    return sendRequest(`${BASE_URL}${productId}`)
}