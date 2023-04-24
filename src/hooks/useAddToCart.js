import {useStore} from "../store/store";
import {Action} from "../store/action";
export const useAddToCartClickHandler = () => {
    const {dispatch} = useStore();

    function addProductToCart(product, qty = 1)  {
        dispatch({type: Action.addProductToCart, payload:  {product, qty}});
    }

    return {addProductToCart};
}