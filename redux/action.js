import { LOGIN } from "./constants";


export function addToCart(data){
    return {
        type:LOGIN,
        data:data
    }
}