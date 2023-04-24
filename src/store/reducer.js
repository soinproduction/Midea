import {addProduct, removeProducts} from "../domains/cart";
import {Action} from "./action";

export const reducer = (state, action) => {
    switch (action.type) {
        case Action.addProductToCart : {
            const {product, qty} = action.payload;
            const {cart} = state;
            const updatedCart = addProduct(cart, product, qty);

            return {...state, cart: {...updatedCart}}
        }

        case Action.removeProductFromCart : {
            const {cart} = state;
            const updatedCart = removeProducts(cart, action.payload);

            return {...state, cart: {...updatedCart}}
        }

        case Action.setProducts : {
            return {...state, products: action.payload}
        }

        case Action.setProduct : {
            return {...state, product: action.payload}
        }

        case Action.updateFavorite : {
            const favoriteStore = state.favorite.products

            if (favoriteStore.filter((product) => product.id === action.payload.id).length > 0) {
                return {
                    ...state,
                    favorite: {products: favoriteStore.filter((product) => product.id !== action.payload.id)}
                }
            } else {
                return {...state, favorite: {products: [...state.favorite.products, action.payload]}}
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}