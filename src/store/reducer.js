export const reducer = (state, action) => {
    switch (action.type) {
        case 'updateCart': {
            return {
                ...state, cart: {products: [...state.cart.products, action.payload]}
            }
        }
        case 'setProducts': {
            return {
                ...state, products: action.payload
            }
        }
        case 'updateFavorite': {
            return {
                ...state, favorite: {products: [...state.favorite.products, action.payload]}
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}